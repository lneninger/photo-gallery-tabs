import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';
import * as dotenv from 'dotenv';

import middlewares from './middlewares/index';

import api from './api/index';

export * from './pubsubs/index';
export * from './firestore-listeners/index';

dotenv.config();

admin.initializeApp();

const app: express.Express = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

middlewares(app);
api(app);

// const environmentId = process.env.ENVIRONMENT_ID;

module.exports.app = functions
  // .runWith({ secrets: secretVariables })
  .https.onRequest(app);
