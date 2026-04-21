import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { UserAuthService } from './auth/services/user-auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'home-inventory';
  isUserAuthenticated: boolean = false;
  isUserSignedInSub!: Subscription;

  constructor(private auth: AuthService, private userAuthService: UserAuthService) {
    this.isUserAuthenticated = auth.isAuthenticated();
  }

  ngOnInit(): void {
    this.isUserSignedInSub = this.userAuthService.isUserSignedInEvent.subscribe((result) => {
      this.isUserAuthenticated = result;
    });
  }

  ngOnDestroy(): void {
    if(this.isUserSignedInSub) this.isUserSignedInSub.unsubscribe();
  }
}
