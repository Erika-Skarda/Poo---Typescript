# Poo-Typescript

Repositório para consolidação de conhecimento dos conceitos do Paradigma de Orientação a Objeto.

## Princípios básicos da Orientação a Objetos :books:

### 🎯 Encapsulamento 

Conforme o nome sugere, a proposta é <b>isolar o máximo possível</b> as nossas classes, de forma a esconder detalhes de funcionamento interno.

Visa aumentar a <b>flexibilidade</b>, melhorar a <b>manutenção</b> e aumentar a <b>extensibilidade</b> do Software.

Modificadores de acesso: nos permitem configurar <b>visibilidade</b> dos nossos <b>atributos, classes </b> e <b>métodos.</b>

  ☞ <b>public (+)</b>: Visibilidade padrão do Typescript, utilizada de forma restrita, apenas quando desejamos que outras classes "enxerguem" nossa classe, métodos ou atributo. Torna visível em todo o projeto.

  ☞ <b>private (-)</b>: Torna a visibilidade apenas local (mesmo arquivo), tornando invisível para outras classes.
  <b>Atributos</b> normalmente são privados.
  <b>Métodos</b> que implementam rotinas internas (métodos auxiliares) devem ser privados.

  ☞ <b>protected (#)</b>: Torna visível por classes herdadas, utilizado mais quando trabalhamos com  <b>herança</b>.

### 🎯 Herança

Segundo o princípio da herança, uma classe (filha) pode herdar de outra (pai) características e comportamentos já definidas nessa segunda, sem necessidade de redefinição.

métodos estáticos não precisam ser instanciado, não manipula atributos da classe.

### 🎯 Polimorfismo

Polimorfismo é um conceito a partir do qual objetos podem assumir formas diferentes em determinadas situações, mas mantendo uma relação com sua definição inicial de nível mais alto. Aliado ao conceito de herança, o polimorfismo indica que um objeto do tipo de uma classe pai pode assumir a forma de qualquer uma de suas classes filhas, mas não o inverso, e o TypeScript permite o polimorfismo por meio dos métodos.

### 🎯 Abstração

Métodos que possuem uma assinatura mas sem implementação. 
<b>OBS:</b> Métodos abstratos só podem ocorrer em classes abstratas. Classes abstratas também são chamadas de classses incompletas pois não podem ser instanciandas, as outras são chamadas de classes completas.

## Linguagens, dependencias e libs utilizadas :books:

- [Typescript](https://www.typescriptlang.org/)
- [NodeJs](https://nodejs.org/en/)
- 
## Desenvolvido Por :octocat:

| [<img src="https://avatars1.githubusercontent.com/u/60902843?s=400&u=fca9219fa3416ab4b849077b9248f71d44133283&v=4" width=115><br><sub>Erika Skarda</sub>](https://www.linkedin.com/in/erika-skarda/) | 
| :---: |
