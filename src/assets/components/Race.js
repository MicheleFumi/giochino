export default class Race {
  type;
  attack;
  defense;
  hp;

  constructor(attack, defense, hp, type) {
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.type = type;
  }
}
