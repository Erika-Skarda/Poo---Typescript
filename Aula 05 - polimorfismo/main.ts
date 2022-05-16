import { Mage } from "./Mage";
import { Priest } from "./Priest";
import { Personagem } from './Personagem';

//Se eu tipo como personagem eu n consigo acessar método atacas da classe Mage
let mage: Personagem = new Mage('Erika Mage')
let priest: Priest = new Priest('Erika Priest')


const personagens: Personagem[] = [];
personagens.push(mage);
personagens.push(priest);

personagens.forEach((p) => console.log(p.atacar()));