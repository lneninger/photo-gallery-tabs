// import { IEmailConfiguration } from '../services/email/email.models';
// import { ITwilioConfiguration } from '../services/twilio/twilio.models';

// /**
//  * Configuration class
//  */
// export class Config {
//   /**
//    * @return {string} The Firebase project ID
//    */
//   static get appLogTopic(): string {
//     return 'TOPIC_APP_LOG';
//     // return <string>process.env.TOPIC_FOR_APP_LOG;
//   }

// /**
//  * @return {IEmailConfiguration} Email configuration
//  */
// static get emailConfiguration(): IEmailConfiguration {
//   return {
//     host: <string>process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT as unknown as number,
//     secure: process.env.EMAIL_SECURE as unknown as boolean,
//     tls: process.env.EMAIL_USE_TLS as unknown as boolean,
//     ssl: process.env.EMAIL_USE_SSL as unknown as boolean,
//     auth: {
//       user: <string>process.env.EMAIL_HOST_USER,
//       pass: <string>process.env.EMAIL_HOST_PASSWORD,
//     },
//   };
// }

// /**
//  * @return {ITwilioConfiguration} Twilio configuration
//  */
// static get twilioConfiguration(): ITwilioConfiguration {
//   return {
//     accountSid: <string>process.env.EMAIL_HOST_USER,
//     authToken: <string>process.env.EMAIL_HOST_USER,
//     twilioNumber: <string>process.env.EMAIL_HOST_USER,
//   };
// }
// }


import { IEmailConfiguration } from '../services/email/email.models';
import { ITwilioConfiguration } from '../services/twilio/twilio.models';

import {
  appEmailHost,
  appEmailPassword,
  appEmailPort,
  appEmailSSL,
  appEmailSecure,
  appEmailTLS,
  appEmailUser,
  appTwilioAccountSID,
  appTwilioAthenticationToken,
  appTwilioNumber, pubsubTopicForAppLog,
} from '../../_environment/environment';
/**
 * Configuration class
 */
export class Config {
  /**
   * @return {string} The Firebase project ID
   */
  static get appLogTopic() {
    return pubsubTopicForAppLog;
  }

  /**
   * @return {string} The Firebase project ID
   */
  static get emailConfiguration(): IEmailConfiguration {
    return {
      host: appEmailHost,
      port: appEmailPort,
      secure: appEmailSecure,
      tls: appEmailTLS,
      ssl: appEmailSSL,
      auth: {
        user: appEmailUser,
        pass: appEmailPassword,
      },
    };
  }

  /**
   * @return {string} The Firebase project ID
   */
  static get twilioConfiguration(): ITwilioConfiguration {
    return {
      accountSid: appTwilioAccountSID,
      authToken: appTwilioAthenticationToken,
      twilioNumber: appTwilioNumber,
    };
  }
}
