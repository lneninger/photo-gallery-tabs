
import * as express from 'express';
import * as pubsub from '@google-cloud/pubsub';
const pubSubClient = new pubsub.PubSub();

import { Config } from '../models/app.models';

/**
 *
 * @param {express.Express} app Express app instance
 */
export function configure(app: express.Express) {
  app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    const oldJson = res.json;
    res.json = (body) => {
      res.locals.body = body;
      return oldJson.call(res, body);
    };
    res.on('finish', async () => {
      const reqLog = { baseUrl: req.baseUrl, method: req.method, content: req.body };
      const resLog = { statusCode: res.statusCode, content: res.locals.body };
      await pubSubClient
        .topic(Config.appLogTopic)
        // .topic((functions.config() as IConfig).pubsub.appLogTopic)

        .publishMessage({ json: { req: reqLog, res: resLog, timestamp: Date.now() } });
    });

    next();
  });
}

export default configure;
