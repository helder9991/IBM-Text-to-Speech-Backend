import fs from 'fs';
import crypto from 'crypto';
import { Readable } from 'typeorm/platform/PlatformTools';

import textToSpeech from '../config/ibm';

interface IProps {
  commentary: string;
}

class RequestTextToSpeechService {
  async execute({ commentary }: IProps): Promise<string> {
    // Faz a requisição com a API da IBM
    const response = await textToSpeech.synthesize({
      text: commentary,
      voice: 'pt-BR_IsabelaV3Voice',
      accept: 'audio/wav',
    });

    const audio = await textToSpeech.repairWavHeaderStream(
      Readable.from(response.result),
    );

    // Gera o nome do arquivo
    const fileHash = `${crypto
      .randomBytes(20)
      .toString('hex')}-${Date.now()}.wav`;

    // Guarda o arquivo dentro da pasta assets
    await fs.writeFileSync(`./src/assets/audios/${fileHash}`, audio);

    return fileHash;
  }
}

export default new RequestTextToSpeechService();
