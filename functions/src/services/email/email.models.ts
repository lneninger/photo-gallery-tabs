
export interface IEmailConfiguration{
  host: string;
  port: number;
  tls: boolean;
  ssl: boolean;
  auth: {
    user: string;
    pass: string;
  };
}
