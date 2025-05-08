import Race from "./Race";
import Weapon from "./Weapon";
export default class Player {
  title;
  race;
  weapon;

  constructor(name, race, weapon) {
    this.title = name;
    this.race = new Race(race.attack, race.defense, race.hp, race.type);
    this.weapon = new Weapon(
      weapon.name,
      weapon.bonusAttack,
      weapon.bonusDefense
    );
    this.attack = this.race.attack;
    this.defense = this.race.defense;
    this.hp = this.race.hp;
    this.type = this.race.type;
    this.name = this.weapon.name;
    this.bonusAttack = this.weapon.bonusAttack;
    this.bonusDefense = this.weapon.bonusDefense;
  }

  saluto() {
    console.log(
      `ciao sono ${this.name},sono un ${this.race.type} ed ho ${this.race.attack} di attacco e ${this.race.defense} di difesa. La mia vita è di ${this.race.hp}.`
    );
  }
}
