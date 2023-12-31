
import * as express from 'express';
import configureUserCreate from './users/create';
// import configureSiteConfig from './site/config';

export * from './users/create';
export * from './menus/get';
export * from './site/config';

/**
 *
 * @param {express.Express} app Express app instance
 */
export function configure(app: express.Express) {
  console.log('configure api', app);

  configureUserCreate(app);
  // configureSiteConfig(app);
}

export default configure;
