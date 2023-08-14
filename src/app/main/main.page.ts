import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, IonicModule, ItemSlidingCustomEvent, LoadingController, RefresherCustomEvent } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { MenuService } from '../services/menu/menu.service';
import { Title } from '@angular/platform-browser';

import { ContactPayload, Contacts, EmailType, GetContactResult, GetContactsResult, PhoneType, PostalAddressType, Projection } from '@capacitor-community/contacts';
import { ContactService } from '../services/contact/contact.service';
import { Router, RouterLink } from '@angular/router';
import { FirestoreDocumentMapping } from '../services/firebase/firebase.models';
import { IAppContact, IAppUIContact } from '../services/contact/contact.models';
import { DeviceService } from '../services/device/device.service';
import { SimCard } from '@jonz94/capacitor-sim';


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
  deviceSimCards: SimCard[] = [];
  constructor(
    private deviceService: DeviceService,
    titleService: Title,
    private loadingCtrl: LoadingController,
  ) {
    titleService.setTitle('Main');
  }

  async ngOnInit(): Promise<void> {
    this.deviceSimCards = await this.deviceService.getSimCards();
  }


}

