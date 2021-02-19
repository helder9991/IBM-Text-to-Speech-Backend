import { Request, Response } from 'express';
import * as Yup from 'yup';

import CreateCommentaryService from '../services/CreateCommentaryService';
import ListCommentariesService from '../services/ListCommentariesService';

import AppError from '../errors/AppError';
import RequestTextToSpeechService from '../services/RequestTextToSpeechService';

class CommentaryController {
  async index(req: Request, res: Response) {
    const commentaries = await ListCommentariesService.execute();
    res.json(commentaries);
  }

  async store(req: Request, res: Response) {
    const schema = Yup.object().shape({
      commentary: Yup.string().min(1).required(),
    });

    // Verifica se foi enviado um comentario
    if (!(await schema.isValid(req.body)))
      throw new AppError('The commentary was not recived.', 400);

    const { commentary } = req.body;

    // Chama a IBM api
    const filename = await RequestTextToSpeechService.execute({ commentary });

    // Salva no banco de dados
    const newCommentary = await CreateCommentaryService.execute({
      commentary: req.body.commentary,
      filename,
    });

    res.json(newCommentary);
  }
}

export default new CommentaryController();
