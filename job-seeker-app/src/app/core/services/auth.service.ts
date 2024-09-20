import { inject, Injectable, signal } from '@angular/core';
import {
  RegisterReq,
  User,
  UserCredentials,
} from '../../feature/auth/models/auth.model';
import { AuthApiService } from './auth-api.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiService = inject(AuthApiService);
  private router = inject(Router);

  currentUser = signal<User>(null);

  constructor() {
    this.getUserFromLocalStorage();
  }

  registerUser(req: RegisterReq) {
    this.apiService.registerUser(req).subscribe({
      next: () => {
        console.log('user registerd');
        this.router.navigate(['login']);
      },
      error: (error) => console.log(error),
    });
  }

  loginUser(credentials: UserCredentials) {
    this.apiService.loginUser(credentials).subscribe({
      next: (response) => {
        const token = response.headers.get('access-token');
        const refreshToken = response.headers.get('refresh-token');

        const user = { ...response.body, token, refreshToken };

        this.currentUser.set(user);

        this.saveUserInLocalStorage(this.currentUser());

        this.router.navigate(['jobs']);
      },
    });
  }

  logoutUserFromServer() {
    this.apiService.logoutUser(this.currentUser().refreshToken).subscribe();
  }

  logoutUser() {
    this.currentUser.set(null);
    localStorage.clear();
    this.router.navigate(['login']);
  }

  saveUserInLocalStorage(currentUser: User) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  getUserFromLocalStorage() {
    const userJSON = localStorage.getItem('currentUser');

    if (!userJSON) return;

    this.currentUser.set(JSON.parse(userJSON));
  }

  refreshAccessToken(refreshToken: string) {
    return this.apiService.refreshAccessToken(refreshToken).pipe(
      tap((response) => {
        console.log('this is from the tap in the auth');

        const token = response.headers.get('access-token');
        const refreshToken = response.headers.get('refresh-token');

        this.currentUser.update((prevData) => ({
          ...prevData,
          token,
          refreshToken,
        }));

        this.saveUserInLocalStorage(this.currentUser());
      })
    );
  }
}
