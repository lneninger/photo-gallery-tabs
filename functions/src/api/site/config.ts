import * as express from 'express';

/**
 *
 * @param {express.Express}app Express app instance
 */
export function configure(app: express.Express) {
  app.get('/config', (req, res) => res.status(200)
    .json({ message: 'Hello config' }));
}


export default configure;
