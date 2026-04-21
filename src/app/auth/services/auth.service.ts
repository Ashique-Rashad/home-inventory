import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from '../models/auth.user';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sampleCredentials: AuthUser[] = [{ username: "rashad", password: 'test.123' }, { username: "akhtar", password: 'test.123' }];  

  constructor(private toastr: ToastrService, private router: Router, private userAuthService: UserAuthService) {}

  login(credential: AuthUser) {
    const result = this.isCredentialsMatched(credential);
    if (result) {
        localStorage.setItem('token', 'test123');
        this.router.navigate(["inventory"]);
        this.userAuthService.emitIsUserSignedInEvent(true);
    } else {
        this.router.navigate(["signin"]);
        this.toastr.error("Credentials don't match");
    }
  }

  isCredentialsMatched(credential: AuthUser) {
    const result = this.sampleCredentials.find((item) => credential.username === item.username && credential.password === item.password);
    return result;
  }

  logout() {
    localStorage.removeItem('token');
    this.userAuthService.emitIsUserSignedInEvent(false);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    console.log('ok');
    return !!this.getToken();
  }
}