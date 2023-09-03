import { Component, OnInit } from '@angular/core';
import { IonicModule, LoadingController } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MenuService } from '../services/menu/menu.service';

import { IAppUIContact } from '../services/contact/contact.models';
import { DeviceService } from '../services/device/device.service';
// import { SimCard } from '@jonz94/capacitor-sim';


@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
  standalone: true,
  providers: [MenuService],
  imports: [IonicModule, CommonModule],
})
export class MainPage implements OnInit {
  contacts: any[] = [];
  selectedContact: IAppUIContact | undefined;
  // deviceSimCards: SimCard[] = [];
  constructor(
    private deviceService: DeviceService,
    titleService: Title,
    private loadingCtrl: LoadingController,
  ) {
    titleService.setTitle('Main');
  }

  async ngOnInit(): Promise<void> {
    // this.deviceSimCards = await this.deviceService.getSimCards();
  }


}

