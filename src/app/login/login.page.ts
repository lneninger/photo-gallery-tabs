import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/firebase/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage {

  public email: string = '';
  public password: string = '';
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private authService: AuthService) {}

  public login(): void {
    this.authService.login(this.email, this.password);
  }
}
