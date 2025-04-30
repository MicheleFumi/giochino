import Race from "./Race";
export default class Player {
  name;
  race;

  constructor(name, race) {
    this.name = name;
    this.race = new Race(race.attack, race.defense, race.hp, race.type);
    this.attack = this.race.attack;
    this.defense = this.race.defense;
    this.hp = this.race.hp;
    this.type = this.race.type;
  }

  saluto() {
    console.log(
      `ciao sono ${this.name}, ho ${this.attack} di attacco e ${this.defense} di difesa. La mia vita è di ${this.hp};
      sono un ${this.type}`
    );
  }
}
