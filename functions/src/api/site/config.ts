import * as functions from 'firebase-functions';
import corsConfig from 'cors';
import { MenuService } from '../../services/menu/menu.service';
import { CountryService } from '../../services/country/country.service';
import { Config } from '../../models/app.models';

const cors = corsConfig({ origin: true });
export const getConfig = functions.https.onRequest(async (req: functions.https.Request, res: functions.Response) => {
  return cors(req, res, async () => {
    const port = Config.emailConfiguration.host;
    console.log('port', port);
    const countryService = new CountryService();
    const country = await countryService.getUS();

    const menuService = new MenuService();
    const menus = await menuService.getMenu();
    const toppings = await menuService.getToppings();
    res.status(200).json({ country, menus, toppings });
  });
});


// export default config;


