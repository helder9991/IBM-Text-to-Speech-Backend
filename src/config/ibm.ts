import TextToSpeech from 'ibm-watson/text-to-speech/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

const textToSpeech = new TextToSpeech({
  authenticator: new IamAuthenticator({
    apikey: process.env.IBM_API_KEY || '',
  }),
  serviceUrl: process.env.IBM_API_URL,
});

export default textToSpeech;
