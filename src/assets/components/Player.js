export default class Player {
  name;
  attack;
  defense;
  hp;

  constructor(name, attack, defense, hp) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
  }

  saluto() {
    console.log(
      `ciao sono ${this.name}, ho ${this.attack} di attacco e ${this.defense} di difesa. La mia vita è di ${this.hp}`
    );
  }
}
