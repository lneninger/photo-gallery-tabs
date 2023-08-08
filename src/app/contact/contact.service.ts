import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAppUIContact } from '../services/contact/contact.models';




@Injectable({providedIn: 'root'})
export class SelectedContactService {

  private _selectedContact$ = new BehaviorSubject<IAppUIContact | undefined>(undefined);
selectedContact$ = this._selectedContact$.asObservable();
set selectedContact(contact: IAppUIContact | undefined) {
  this._selectedContact$.next(contact);
}
get selectedContact() {
  return this._selectedContact$.value;
}

  constructor() { }

  setSelectedContact(contact: IAppUIContact) {
    this._selectedContact$.next(contact);
  }
}
