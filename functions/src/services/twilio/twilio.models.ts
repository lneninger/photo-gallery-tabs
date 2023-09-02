import { SecretParam } from 'firebase-functions/lib/params/types';

export interface ITwilioConfiguration{
  accountSid: SecretParam;
  authToken: SecretParam;
  twilioNumber: SecretParam;
}
