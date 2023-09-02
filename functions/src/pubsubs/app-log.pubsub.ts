import * as admin from 'firebase-admin';
import { onMessagePublished } from 'firebase-functions/v2/pubsub';
import * as functions from 'firebase-functions';
// import { Config } from '../models/app.models';

export const appLogOnPublish = onMessagePublished('TOPIC_APP_LOG'/* Config.appLogTopic.value()*/, async (event) => {
  functions.logger.info('orderMealOnPublish: ', event.data.message);
  admin.firestore().collection('appLog').doc().set(event.data.message.json);
});
