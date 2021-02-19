import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import staticFiles from './config/staticFiles';
// Inicializa a conexao com o BD
import './database';

import routes from './routes';

import handleErrors from './middlewares/handleErrors';

const app = express();

app.use(cors());
app.use(express.json());

// Arquivos estaticos
app.use('/audios', express.static(staticFiles));

// Rotas da aplicacao
app.use(routes);

// Lida com os erros da aplicacao
app.use(handleErrors);

app.listen(process.env.API_PORT, () => {
  console.log('Backend is running!!');
});
