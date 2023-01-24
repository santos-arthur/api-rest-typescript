import { Router } from 'express';
import { ping } from '../utils/ping-util';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/ping/', (_, res) => {
  return res.send(JSON.stringify(ping()));
});

router.post('/teste/:id', (req, res) => {
  console.log(req.params.id);
  return res.status(StatusCodes.NOT_IMPLEMENTED).send('Olá, Mundo!');
});


export { router };