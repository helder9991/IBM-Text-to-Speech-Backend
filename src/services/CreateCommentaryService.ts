import { getRepository } from 'typeorm';

import Commentary from '../models/Commentary';

interface IProps {
  commentary: string;
  filename: string;
}

class CreateCommentaryService {
  async execute({ commentary, filename }: IProps): Promise<Commentary> {
    const commentaryRepository = getRepository(Commentary);

    const newCommentary = commentaryRepository.create({
      commentary,
      filename,
    });

    // Salva no banco de dados o commentario do usuario
    await commentaryRepository.save(newCommentary);

    // Substitui o nome do arquivo pela url por onde ele se encontra (Arquivo estatico)
    newCommentary.filename = `${process.env.API_URL}:${process.env.API_PORT}/audios/${newCommentary.filename}`;

    return newCommentary;
  }
}

export default new CreateCommentaryService();
