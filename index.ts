import express, { Application, Request, Response } from 'express';
import * as IndexRouter from './api/index';
import * as GeofencingRouter from './api/geofencing';

const app: Application = express();

const port: number = 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', IndexRouter.router);
app.use('/api/geofencing', GeofencingRouter.router);

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
