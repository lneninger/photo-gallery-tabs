import { Twilio } from 'twilio';


/**
 * A service for sending emails
 */
export class TwilioService {
  static accountSid = process.env.TWILIO_ACCOUNT_SID;
  static authToken = process.env.TWILIO_AUTH_TOKEN;

  /**
   * Send a voice call
   * @param {number} mobilePhone The number to send the voice call to
   * @param {string} message The message to send
   * @param {string} twilioNumber The twilio number to send the voice call from
  */
  async sendSMS(mobilePhone: string, message: string, twilioNumber?: string) {
    twilioNumber ??= process.env.TWILIO_NUMBER;
    const client = new Twilio(TwilioService.accountSid, TwilioService.authToken);
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
    const client = new Twilio(TwilioService.accountSid, TwilioService.authToken);
    client.calls
      .create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: number,
        from: '+15017122661',
      });
  }
}
