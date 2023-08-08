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
import { SelectedContactService } from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
  standalone: true,
  providers: [MenuService],
  imports: [IonicModule, CommonModule, RouterLink],
})
export class ContactPage implements OnInit {
  contacts: any[] = [];
  selectedContact: IAppUIContact | undefined;
  constructor(
    private service: ContactService,
    private selectedContactService: SelectedContactService,
    titleService: Title,
    private loadingCtrl: LoadingController,
  ) {
    titleService.setTitle(this.selectedContactService.selectedContact?.contact?.name?.display ?? 'Contacts');
  }

  async ngOnInit(): Promise<void> {
  }


}

