import * as express from 'express';
import configureAppLog from './app-log-middleware';
import cors from 'cors';
import bodyParser from 'body-parser';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

/**
 *
 * @param {express.Express} app Express app instance
 */
export function configure(app: express.Express) {
// app.use(bodyParser.json());
  app.use(cors(), bodyParser.json());
  configureAppLog(app);
}

export default configure;
