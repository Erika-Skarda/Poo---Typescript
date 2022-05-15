export class Personagem {
  constructor(
    private _nome: string,
    private _energia: number,
    private _ataque: number,
    private _defesa: number
    
    ) {}

    //  TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARAMETRO
    //  TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE, USE RETORNO
  
  public get nome() : string {
    return this._nome;
  }

  
  public get energia() : number {
    return this._energia
  }
  
  
  public set energia(v : number) {
    this._energia = v;
  }
  
  public get ataque() : number {
    return this._ataque;
  }
  
  
  public set ataque(v : number) {
    this._ataque = v;
  }
  
  
  public get defesa() : number {  
    return this._defesa;
  }
  
  
  public set defesa(v : number) {
    this._defesa = v;
  }
  
    
  public status(): string {
    return (
      "Guerreiro: \n" +
      "\nNome: " +
      this.nome +
      ("\nEnergia: " + this.energia.toFixed(1)) +
      ("\nAtaque: " + this.ataque.toFixed(1)) +
      ("\nDefesa: " + this.defesa.toFixed(1))
    ) ;

  }

  public treinarAtacar(): void {
    this.ataque += this.randomizar(7);
    this.energia -= this.randomizar(10);
    this.isDead()
    if (this.defesa > 100) {
      this.defesa = 0;
    }
  }

  public treinarDefesa(): void {
    this.defesa += this.randomizar(5);
    this.energia -= this.randomizar(10);
    if (this.defesa > 100) {
      this.defesa = 0;
    }
  } 

  public descansar(hour: number): void {
    this.energia += hour * this.randomizar(10);
    if (this.energia > 100) {
        this.energia = 100;
    }
  }

  public batalhar(): number {
    let desgaste: number = this.randomizar(10);
    this.energia -= desgaste; 
    return desgaste;
  }

  public isDead(): boolean {
    return (this.energia < 0) 
  }

  private randomizar(fator: number): number {
    return Math.random() * fator
  }
}
  

  


