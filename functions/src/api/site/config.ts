import * as express from 'express';

/**
 *
 * @param {express.Express}app Express app instance
 */
export function configure(app: express.Express) {
  app.get('/api/config', async (req, res) => {
    const externalRes = await fetch('https://restcountries.com/v3.1/translation/usa');

    const countryCodes = await externalRes.json();
    res.status(200).json({ countryCodes });
  });
}


export default configure;
