import { BooleanParam, IntParam, SecretParam, StringParam } from 'firebase-functions/lib/params/types';

export interface IEmailConfiguration{
  host: StringParam;
  port: IntParam;
  secure: BooleanParam;
  tls: BooleanParam;
  ssl: BooleanParam;
  auth: {
    user: SecretParam;
    pass: SecretParam;
  };
}
