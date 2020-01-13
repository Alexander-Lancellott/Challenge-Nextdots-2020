import ServiceConfig from './ServiceConfig';

export default class CocktailService {
  static getCocktails(text: string) {
    return new Promise(async (resolve, reject) => {
      try {
        let endpoint = `${ServiceConfig.coctails}${text}`;
        let response: any = await ServiceConfig.APIConnector.get(endpoint);
        if (response.__ok) {
          resolve(response);
        } else {
          reject();
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}