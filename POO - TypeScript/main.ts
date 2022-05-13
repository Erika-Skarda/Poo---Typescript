import { Personagem } from "./Personagem";
import prompt from "prompt-sync";

let person: Personagem = new Personagem(
  "Sansa Stark", 
  100, 
  40, 
  20, 
  20
);

let teclado = prompt();
let option: number = 0;

while (option != 9 || person.isDead()) {
  console.log("+========= Personagem =============+");
  console.log("|1. Treinar ataque                 |");
  console.log("|2. Treinar defesa                 |");
  console.log("|3. Descansar                      |");
  console.log("|4. Entrar em batalha              |");
  console.log("|8. Imprimir atributos             |");
  console.log("|9. Sair                           |");
  console.log("+==================================+");

  option = +teclado("Escolha uma ação: ");

  switch (option) {
    case 1:
      person.treinarAtacar();
      person.status();
      break;
    case 2:
      person.treinarDefesa();
      person.status();
      break;
    case 3:
      let horas: number = +teclado("Digite o número de horas: ");
      person.descansar(horas);
      person.status();
      break;
    case 4:
      let rest: number = person.batalhar()
      console.log(`Esta batalha custou ${rest} de energia`);
      person.status();
      break;
    case 8:
      person.status();
      break;
    default:
      break;
  }
}
console.log("Ops! Morreu!");