import * as express from 'express';
import configureAppLog from './app-log-middleware';


/**
 *
 * @param {express.Express} app Express app instance
 */
export function configure(app: express.Express) {
  configureAppLog(app);
}

export default configure;
