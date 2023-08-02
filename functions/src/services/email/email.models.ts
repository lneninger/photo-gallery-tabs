
export interface IEmailConfiguration{
  host: string;
  port: number;
  secure: boolean;
  tls: boolean;
  ssl: boolean;
  auth: {
    user: string;
    pass: string;
  };
}
