import * as express from 'express';
import { MenuService } from '../../services/menu/menu.service';
import { CountryService } from '../../services/country/country.service';
// import { getSecret } from '../../_utilities/utiles.environment';
import { Config } from '../../models/app.models';
// import { defineInt } from 'firebase-functions/params';

/**
 *
 * @param {express.Express}app Express app instance
 */
export function config(app: express.Express) {
  app.get('/api/config', async (req, res) => {
    // const appEmailPort = await getSecret('EMAIL_HOST');

    const port = Config.emailConfiguration.host;
    console.log('port', port);
    const countryService = new CountryService();
    const country = await countryService.getUS();

    const menuService = new MenuService();
    const menus = await menuService.getMenu();
    res.status(200).json({ country, menus });
  });
}


export default config;
