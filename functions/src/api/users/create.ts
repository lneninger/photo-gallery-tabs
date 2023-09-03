import * as express from 'express';
import * as functions from 'firebase-functions';
import corsConfig from 'cors';

/**
 *
 * @param {express.Express}app Express app instance
 */
function configureExpress(app: express.Express) {
  app.get('/api/users', (req, res) => res.status(200)
    .json({ message: 'Hello User' }));
}

const cors = corsConfig({ origin: true });

export const getUsers = functions.https.onRequest((req: functions.https.Request, res: functions.Response) => {
  return cors(req, res, async () => {
    res.status(200).json({ message: 'Hello User callable' });
  });
});


export default configureExpress;
