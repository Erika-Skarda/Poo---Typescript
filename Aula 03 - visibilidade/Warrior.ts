import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Warrior extends Personagem {
  private _forca: number;
  private _agilidade: number;

  //Não posso deixar construtor vazio porque estou herdando
  // de uma classe com construtor com parâmetro, deve ser igual ou maior
  constructor(nome: string) {
    // super é construtor da superclasse 
    super(nome);
    // se os atributos da classe pai (Personagem fosses private nao conseguiria acessar)
    this._armadura = Util.randomizar(1_000, 10_000);
    this._vidaMaxima = Util.randomizar(200, 10_000);
    this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
    this._vidaAtual = 100;
    this._forca = Util.randomizar(100, 1_000);
    this._agilidade = Util.randomizar(100, 1_000);
}

}