import * as functions from 'firebase-functions';
import corsConfig from 'cors';
// import * as express from 'express';
import { MenuService } from '../../services/menu/menu.service';
import { CountryService } from '../../services/country/country.service';
// import { getSecret } from '../../_utilities/utiles.environment';
import { Config } from '../../models/app.models';
// import { Request, Response } from 'express-serve-static-core';
// import { ParsedQs } from 'qs';
// import { defineInt } from 'firebase-functions/params';

/**
 *
 * @param {express.Express}app Express app instance
 */
// function config(app: express.Express) {
//   app.get('/api/config', async (req, res) => {
//     internalGetUser(req, res);
//   });
// }

const cors = corsConfig({ origin: true });
export const getConfig = functions.https.onRequest(async (req: functions.https.Request, res: functions.Response) => {
  return cors(req, res, async () => {
    // const appEmailPort = await getSecret('EMAIL_HOST');

    const port = Config.emailConfiguration.host;
    console.log('port', port);
    const countryService = new CountryService();
    const country = await countryService.getUS();

    const menuService = new MenuService();
    const menus = await menuService.getMenu();
    res.status(200).json({ country, menus });
  });
});


// export default config;


