import { inject, Injectable, signal } from '@angular/core';
import {
  RegisterReq,
  User,
  UserCredentials,
} from '../../feature/auth/models/auth.model';
import { AuthApiService } from './auth-api.service';
import { Router } from '@angular/router';

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

        const user = { ...response.body, token };

        this.currentUser.set(user);

        this.saveUserInLocalStorage(this.currentUser());

        this.router.navigate(['jobs']);
      },
    });
  }

  saveUserInLocalStorage(currentUser: User) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  getUserFromLocalStorage() {
    const userJSON = localStorage.getItem('currentUser');

    if (!userJSON) return;

    this.currentUser.set(JSON.parse(userJSON));
  }
}
