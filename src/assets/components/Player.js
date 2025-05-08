import Race from "./Race";
import Weapon from "./Weapon";
export default class Player {
  title;
  race;
  weapon;

  constructor(name, race, weapon) {
    this.title = name;
    this.race = new Race(
      race.attack,
      race.defense,
      race.hp,
      race.type,
      race.racialAbilities
    );
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

  applyPassiveBonuses() {
    this.race.racialAbilities.forEach((ability) => {
      if (ability.trigger === "sempre attiva") {
        const bonus = ability.bonus;
        if (bonus.attack) this.attack += bonus.attack;
        if (bonus.defense) this.defense += bonus.defense;
        if (bonus.hp) this.hp += bonus.hp;
      }
    });
  }

  applyConditonalBonuses(currentHP) {
    this.race.racialAbilities.forEach((ability) => {
      if (ability.trigger === "Quando HP < 50%" && currentHP < this.hp / 2) {
        const bonus = ability.bonus;
        if (bonus.attack) this.attack += bonus.attack;
      }
    });
  }
}
