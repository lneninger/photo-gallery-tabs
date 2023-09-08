import * as express from 'express';
import * as functions from 'firebase-functions';
// import corsConfig from 'cors';
import { MenuService } from '../../services/menu/menu.service';

/**
 *
 * @param {express.Express}app Express app instance
 */
function configureExpress(app: express.Express) {
  app.get('/api/users', (req, res) => res.status(200)
    .json({ message: 'Hello User' }));
}

// const cors = corsConfig({ origin: true });

export const getMenus = functions.https.onCall(async (data: any, context: functions.https.CallableContext) => {
  const menuService = new MenuService();
  return await menuService.getMenu();
});


export default configureExpress;
