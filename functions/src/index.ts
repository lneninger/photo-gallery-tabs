import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as dotenv from 'dotenv';

import middlewares from './middlewares/index';
import api from './api/index';

export * from './pubsubs/index';

dotenv.config();

admin.initializeApp();

const app: express.Express = express();
middlewares(app);
api(app);

module.exports.app = functions.https.onRequest(app);
