import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/firebase/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: 'logout.page.html',
  styleUrls: ['logout.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LogoutPage {


  constructor(
    public service: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router) { }

  public async logout(): Promise<void> {

    const loading = await this.loadingCtrl.create({
      message: 'Authenticating',
      duration: 3000,
    });
    try {
      await loading.present();

      this.service.setError(undefined);
      await this.service.logout();
      this.router.navigate(['/']);

    } finally {
      await loading.dismiss();
    }
  }
}
