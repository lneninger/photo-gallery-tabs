import * as express from 'express';

/**
 *
 * @param {express.Express}app Express app instance
 */
export function configure(app: express.Express) {
  app.get('/api/users', (req, res) => res.status(200)
    .json({ message: 'Hello User' }));
}


export default configure;
