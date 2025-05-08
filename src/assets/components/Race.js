export default class Race {
  type;
  attack;
  defense;
  hp;
  racialAbilities;

  constructor(attack, defense, hp, type, racialAbilities) {
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.type = type;
    this.racialAbilities = racialAbilities;
  }
}
