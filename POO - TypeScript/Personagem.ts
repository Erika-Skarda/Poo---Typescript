import prompt from 'prompt-sync'

// Energia, Vida, Ataque, Defesa e o Nome
class Personagem {
  // COMO INCLUÍ CONSTRUTOR N PRECISAM SER DEFINIDOS COMO ATRIBUTOS DA CLASSE

  // nome: string = '';
  // energia: number = 0;
  // vida: number = 0;
  // ataque: number = 0;
  // defesa: number = 0;

  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number

    ) {
      // this.nome = nome
      // this.energia = 50;
      // this.ataque = 50;
  }
}

let teclado = prompt()
let option: number  = 0;
while (option !== 9) {
  console.log("+====== Personagem =======+")
  console.log("|1. Treinar Ataque        |")
  console.log("|2. Treinar defesa        |")
  console.log("|3. Imprimir atributos    |")
  console.log("|9. Sair                  |")
  console.log("+========================+")

  option = +teclado("Escolha uma ação")

  switch(option) {
    case 1:
      sansa.ataque += 2;
      break;
    case 3:
      console.log("Sansa", sansa)
      break;
    default:
      break
  }

}
let sansa: Personagem;
sansa = new Personagem('Sansa Stark', 100, 40, 20, 20);
// sansa.ataque = 10;
// sansa.defesa = 20;
// sansa.energia = 50;
// sansa.vida = 100;
console.log(sansa);

