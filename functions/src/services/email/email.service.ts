import * as nodemailer from 'nodemailer';
import { Config } from '../../models/app.models';
import SMTPTransport = require('nodemailer/lib/smtp-transport');

/**
 * Email service
 */
export class EmailService {
  /**
   * @param {string} email The email address to send the email to
   * @param {string} subject The subject of the email
   * @param {string} content The content of the email
   * @return {Promise<void>} A promise that resolves when the email is sent
   */
  static sendEmail(email: string, subject: string, content: string) {
    const emailConfig = Config.emailConfiguration;
    const smtpTransport: SMTPTransport.Options = {
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      requireTLS: emailConfig.tls,
      // ssl: emailConfig.ssl,
      auth: {
        user: emailConfig.auth.user,
        pass: emailConfig.auth.pass,
      },
    };

    const transporter = nodemailer.createTransport(smtpTransport);

    const mailOptions = {
      to: email,
      subject: subject,
      html: content,
    };

    return transporter.sendMail(mailOptions).then(() => console.log(`Mail sent to: ${email}`));
  }
}
