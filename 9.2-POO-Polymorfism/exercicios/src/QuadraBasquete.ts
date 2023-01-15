import IAgenda from './interfaces/IAgenda';
import IBasquete from './interfaces/IBasquete';
import normas from './normas/NormasDeUso';
import Quadra from './Quadra';

export default class QuadraBasquete extends Quadra {
  public basqueteData: IBasquete = normas.basquete;

  public reservar<IBasquete>(data: Date): IAgenda<IBasquete> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo: protocolo,
      data: data,
      regras: this.basqueteData as IBasquete,
    };
  }
}
