import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../components/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['']);
    }
  }

  onInputChange({target, detail}: KeyboardEvent): void {
    this[(target as any).name] = (detail as any).value;
  }

  onSubmit(): void {
    this.authService.login(this.username, this.password);
  }
}
