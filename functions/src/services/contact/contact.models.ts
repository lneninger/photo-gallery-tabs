import { IModelWrapper } from '../../_models/global.models';

/**
 * Contact wrapper
 */
export class AppContactWrapper implements IModelWrapper<IAppContact> {
  original: IAppContact;

  /**
   * Get the mobile phone number
   */
  get mobilePhone() {
    return this.original.phones.find((p) => p.type === AppPhoneType.Mobile);
  }

  /**
   * Get the primary email address
   */
  get primaryEmail() {
    return this.original.emails.find(e => e.isPrimary);
  }


  /**
   * @param {IAppContact} input The contact to wrap
   */
  constructor(input: IAppContact) {
    this.original = input;
  }
}

export interface IAppDbContact extends IAppContact {
  $custom: IAppContactCustom;
}

export interface IAppContactCustom {
  createdOn: Date;
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
