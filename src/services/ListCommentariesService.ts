import { getRepository } from 'typeorm';

import Commentary from '../models/Commentary';

class ListCommentariesService {
  async execute(): Promise<Commentary[]> {
    const commentaryRepository = getRepository(Commentary);

    const commentaries = await commentaryRepository.find();

    // Substitui os nomes dos arquivos pela url por onde eles se encontram (Arquivos estaticos)
    commentaries.forEach(commentary => {
      commentary.filename = `${process.env.API_URL}:${process.env.API_PORT}/audios/${commentary.filename}`;
    });

    return commentaries;
  }
}

export default new ListCommentariesService();
