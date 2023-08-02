import { IEmailConfiguration } from '../services/email/email.models';

/**
 * Configuration class
 */
export class Config {
  /**
   * @return {string} The Firebase project ID
   */
  static get appLogTopic(): string {
    return 'TOPIC_APP_LOG';
    // return <string>process.env.TOPIC_FOR_APP_LOG;
  }

  /**
   * @return {string} The Firebase project ID
   */
  static get emailConfiguration(): IEmailConfiguration {
    return {
      host: <string>process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT as unknown as number,
      secure: process.env.EMAIL_SECURE as unknown as boolean,
      tls: process.env.EMAIL_USE_TLS as unknown as boolean,
      ssl: process.env.EMAIL_USE_SSL as unknown as boolean,
      auth: {
        user: <string>process.env.EMAIL_HOST_USER,
        pass: <string>process.env.EMAIL_HOST_PASSWORD,
      },
    };
  }
}
