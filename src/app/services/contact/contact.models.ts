import { FirestoreDocumentMapping } from '../firebase/firebase.models';

export interface IAppUIContact {
  contact: IAppContact;
  dbContact?: FirestoreDocumentMapping<IAppContact> | undefined;
}

export interface IAppContact {
  contactId: string;
  name: IAppContactName;
  phones: IAppContactPhone[];
  emails: IAppContactEmail[];
  birthday: IAppContactBirthday;
  image: IAppContactImage;
  postalAddresses: IAppContactPostalAddress[];
}

export interface IAppContactName {
  display: string;
  given: string;
  middle: string;
  family: string;
  prefix: string;
  suffix: string;
}

export interface IAppContactPhone {
  number: string;
  type: AppPhoneType.Mobile;
  isPrimary: boolean;
}

export interface IAppContactEmail {
  type: AppEmailType.Work,
  label: string;
  isPrimary: boolean;
  address: string;
}

export interface IAppContactBirthday {
  day: number;
  month: number;
  year: number;
}

export interface IAppContactImage {
  base64String: string;
}

export interface IAppContactPostalAddress {
  type: AppPostalAddressType;
  street: string;
  city: string;
  region: string;
  country: string;
  postcode: string;
  label: string;
  isPrimary: true;
}

export declare enum AppPhoneType {
  Home = 'home',
  Work = 'work',
  Other = 'other',
  Custom = 'custom',
  Mobile = 'mobile',
  FaxWork = 'fax_work',
  FaxHome = 'fax_home',
  Pager = 'pager',
  Callback = 'callback',
  Car = 'car',
  CompanyMain = 'company_main',
  Isdn = 'isdn',
  Main = 'main',
  OtherFax = 'other_fax',
  Radio = 'radio',
  Telex = 'telex',
  TtyTdd = 'tty_tdd',
  WorkMobile = 'work_mobile',
  WorkPager = 'work_pager',
  Assistant = 'assistant',
  Mms = 'mms'
}
export declare enum AppEmailType {
  Home = 'home',
  Work = 'work',
  Other = 'other',
  Custom = 'custom',
  Mobile = 'mobile'
}
export declare enum AppPostalAddressType {
  Home = 'home',
  Work = 'work',
  Other = 'other',
  Custom = 'custom'
}
