import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, EMPTY, switchMap } from 'rxjs';

export const authInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);

  if (
    req.url.includes('login') ||
    req.url.includes('register') ||
    req.url.includes('refresh-token')
  )
    return next(req);

  if (!authService.currentUser()) return next(req);

  const token = authService.currentUser().token;

  const clone = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });

  return next(clone).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 403) {
        return authService
          .refreshAccessToken(authService.currentUser().refreshToken)
          .pipe()
          .pipe(
            catchError(() => {
              authService.logoutUser();
              return EMPTY;
            }),
            switchMap((response) => {
              const newToken = response.headers.get('access-token');

              const newCloneReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${newToken}`),
              });

              return next(newCloneReq);
            })
          );
      }

      return next(clone);
    })
  );
};
