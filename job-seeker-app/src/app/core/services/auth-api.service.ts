import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  RegisterReq,
  User,
  UserCredentials,
} from '../../feature/auth/models/auth.model';
import { BASE_URL } from '../constants/core.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private http = inject(HttpClient);

  registerUser(req: RegisterReq) {
    return this.http.post(`${BASE_URL}/auth/register`, req);
  }

  loginUser(credentails: UserCredentials) {
    return this.http.post<User>(`${BASE_URL}/auth/login`, credentails, {
      observe: 'response',
    });
  }
}
