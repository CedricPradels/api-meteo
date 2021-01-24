import express from 'express';
import cors from 'cors';

import { constants } from './constants';

export const startExpress = () => {
  const app = express();

  app.use(cors());

  app.all('*', (_, res) =>
    res
      .status(404)
      .json({ error: 'Page not found.' })
  );

  app.listen(constants.port, () =>
    console.log('Hello world')
  );
};
