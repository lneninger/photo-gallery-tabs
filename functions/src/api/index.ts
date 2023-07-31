
import * as express from 'express';
import configureUserCreate from './users/create';
import configureSiteConfig from './site/config';

/**
 *
 * @param {express.Express} app Express app instance
 */
export function configure(app: express.Express) {
  configureUserCreate(app);
  configureSiteConfig(app);
}


export default configure;
