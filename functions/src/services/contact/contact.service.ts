import { logFire } from '../../_decorators/log.firebase';
import { EmailService } from '../email/email.service';
import { TwilioService } from '../twilio/send-call.service';
import { AppContactWrapper, IAppDbContact } from './contact.models';

/**
 * Contact service
 */
export class ContactService {
  /**
   *
   * @param {IAppDbContact} data contact created
   */
  @logFire('onCreateContact')
  onCreate(data: IAppDbContact) {
    // Email the user
    const contactWrapper = new AppContactWrapper(data);
    this.emailContact(contactWrapper);
    this.smsContact(contactWrapper);
  }

  /**
   * Email the contact
   * @param {AppContactWrapper} contact contact created
   */
  private async smsContact(contact: AppContactWrapper) {
    const twilioService = new TwilioService();
    const mobilePhone = contact.mobilePhone?.number;
    if (mobilePhone) {
      try {
        await twilioService.sendSMS(mobilePhone, 'We received your message. After review it, we\'ll contact you for further information. Thanks');
      } catch (error) {
        console.log(error);
      }
    }
  }

  /**
   * Email the contact
   * @param {AppContactWrapper} contact contact created
   */
  private async emailContact(contact: AppContactWrapper) {
    const emailService = new EmailService();
    let primaryEmail = contact.primaryEmail?.address;
    primaryEmail ??= contact.original.emails[0]?.address;
    if (primaryEmail) {
      try {
        await emailService.sendEmail(primaryEmail, 'Your message was received', 'We received your message. After review it, we\'ll contact you for further information. Thanks');
      } catch (error) {
        console.log(error);
      }
    }
  }
}
