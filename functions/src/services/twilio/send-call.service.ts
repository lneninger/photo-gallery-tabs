import { Twilio } from 'twilio';
import { Config } from '../../models/app.models';


/**
 * A service for sending emails
 */
export class TwilioService {
  /**
   * Send a voice call
   * @param {number} mobilePhone The number to send the voice call to
   * @param {string} message The message to send
   * @param {string} twilioNumber The twilio number to send the voice call from
  */
  async sendSMS(mobilePhone: string, message: string, twilioNumber?: string) {
    twilioNumber ??= Config.twilioConfiguration.twilioNumber.value();
    const client = new Twilio(Config.twilioConfiguration.accountSid.value(), Config.twilioConfiguration.authToken.value());
    client.messages
      .create({
        body: message,
        from: twilioNumber,
        to: mobilePhone,
      });
  }

  /**
   *
   * @param {string} number The number to send the voice call to
   */
  sendVoiceCall(number: string) {
    const client = new Twilio(Config.twilioConfiguration.accountSid.value(), Config.twilioConfiguration.authToken.value());
    client.calls
      .create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: number,
        from: '+15017122661',
      });
  }
}
