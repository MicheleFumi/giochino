const raceList = [
  {
    type: "Elfo",
    attack: 12,
    defense: 6,
    hp: 90,
    racialAbilities: [
      {
        abilityName: "Visione notturna",
        description: "Permette di vedere al buio fino a 30 metri. DEF: +3",
        trigger: "In ambienti bui",
        bonus: { defense: 3 },
      },
      {
        abilityName: "Tiro preciso",
        description: "Aumenta la precisione con armi a distanza. ATT: +2",
        trigger: "Sempre attiva",
        bonus: { attack: 2, appliesTo: "ranged" },
      },
      {
        abilityName: "Agilità superiore",
        description: "Aumenta la velocità di movimento. HP: +50",
        trigger: "Sempre attiva",
        bonus: { hp: 50 },
      },
    ],
  },
  {
    type: "Nano",
    attack: 8,
    defense: 10,
    hp: 110,
    racialAbilities: [
      {
        abilityName: "Forte come la Montagna",
        description: "Aumenta la forza fisica per infliggere danni. ATT: +5",
        trigger: "Sempre attiva",
        bonus: { attack: 5 },
      },
      {
        abilityName: "Resistenza di Pietra",
        description: "Aumenta la resistenza ai danni fisici. DEF: +3",
        trigger: "Sempre attiva",
        bonus: { defense: 3 },
      },
      {
        abilityName: "Mastro Artigiano",
        description:
          "Aumenta la capacità di riparare oggetti e migliorare armi. HP: +150",
        trigger: "Sempre Attiva",
        bonus: { hp: 150 },
      },
    ],
  },
  {
    type: "Umano",
    attack: 10,
    defense: 8,
    hp: 100,
    racialAbilities: [
      {
        abilityName: "Determinazione",
        description: "Aumenta la determinazione in battaglia.ATT: +10",
        trigger: "Durante combattimenti difficili",
        bonus: { attack: 10 },
      },
      {
        abilityName: "Senso di Giustizia",
        description:
          "Aumenta la protezione contro gli attacchi ingiusti. DEF: +5",
        trigger: "Contro nemici malvagi",
        bonus: { defense: 5 },
      },
    ],
  },
  {
    type: "Orco",
    attack: 14,
    defense: 5,
    hp: 120,
    racialAbilities: [
      {
        abilityName: "Furia del Guerriero",
        description:
          "Aumenta la forza in combattimento quando ferito. ATT: +5 quando la vita è sotto il 50%",
        trigger: "Quando HP < 50%",
        bonus: { attack: 5, condition: "lowHP" },
      },
      {
        abilityName: "Resistenza Selvaggia",
        description: "Aumenta la resistenza agli attacchi fisici. DEF: +3",
        trigger: "Sempre attiva",
        bonus: { defense: 3 },
      },
    ],
  },
  {
    type: "Non Morto",
    attack: 9,
    defense: 9,
    hp: 105,
    racialAbilities: [
      {
        abilityName: "Forza Necrotica",
        description: "Aumenta la potenza fisica derivante dalla morte. ATT: +4",
        trigger: "Sempre attiva",
        bonus: { attack: 4 },
      },
      {
        abilityName: "Senso della Morte",
        description: "Percepisce i nemici nelle vicinanze. HP: +200",
        trigger: "Quando nemici sono vicini",
        trigger: "Sempre Attiva",
        bonus: { hp: 200 },
      },
    ],
  },
];

export default raceList;
