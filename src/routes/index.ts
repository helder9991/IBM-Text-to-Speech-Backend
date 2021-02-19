import { Router } from 'express';
import CommentaryController from '../controllers/CommentaryController';

const routes = Router();

routes.get('/commentary', CommentaryController.index);
routes.post('/commentary', CommentaryController.store);

export default routes;
