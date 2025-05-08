import { useState } from "react";
import "./App.css";
import Player from "./assets/components/Player";
import Race from "./assets/components/Race";
import raceList from "./assets/components/db/raceList";
import Weapon from "./assets/components/Weapon";
import { weaponList } from "./assets/components/db/weaponList";

function App() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [weapon, setWeapon] = useState("");
  const [selectedRace, setSelectedRace] = useState();
  const [playerStats, SetPlayerStats] = useState(null);
  const [selectedWeapon, setSelectedWeapon] = useState();
  const [selectedSkill, setSelectedSkill] = useState(""); // Per tracciare l'abilità selezionata

  function handleSubmit(e) {
    e.preventDefault();

    // Trova la razza scelta
    const choosedRace = raceList.find((race) => race.type === type);
    const choosedWeapon = weaponList.find((w) => w.name === weapon);

    // Trova l'abilità razziale scelta
    const choosedAbility = choosedRace.racialAbilities.find(
      (ability) => ability.abilityName === selectedSkill
    );

    // Crea il personaggio con la razza, l'abilità e l'arma
    const player = new Player(
      `${title}`,
      new Race(
        choosedRace.attack,
        choosedRace.defense,
        choosedRace.hp,
        choosedRace.type,
        choosedRace.racialAbilities // Passa direttamente le abilità razziali
      ),
      new Weapon(
        choosedWeapon.name,
        choosedWeapon.bonusAttack,
        choosedWeapon.bonusDefense
      )
    );

    setSelectedWeapon(choosedWeapon);
    setSelectedRace(choosedRace);
    SetPlayerStats(player);
    console.log(player);
  }

  return (
    <>
      <div className="container py-5">
        <form
          onSubmit={handleSubmit}
          className="p-4 border rounded bg-light shadow-sm"
        >
          <h4 className="mb-3 text-center">Crea il tuo personaggio</h4>

          <div className="mb-4">
            <label className="form-label">Nome del giocatore</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Inserisci il nome del giocatore"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label">Scegli la razza</label>
              {raceList.map((race, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="race"
                    id={`race-${index}`}
                    onChange={(e) => setType(e.target.value)}
                    value={race.type}
                    checked={type === race.type}
                  />
                  <label className="form-check-label" htmlFor={`race-${index}`}>
                    <strong>{race.type}</strong> – att: {race.attack}, def:{" "}
                    {race.defense}, hp: {race.hp}
                  </label>
                </div>
              ))}
            </div>

            <div className="col-md-6">
              <label className="form-label">Scegli l'arma</label>
              {weaponList.map((w, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="weapon"
                    id={`weapon-${index}`}
                    onChange={(e) => setWeapon(e.target.value)}
                    value={w.name}
                    checked={weapon === w.name}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`weapon-${index}`}
                  >
                    <strong>{w.name}</strong> – att: +{w.bonusAttack}, def: +
                    {w.bonusDefense}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Selezione delle abilità razziali */}
          {selectedRace && (
            <div className="mb-4">
              <label className="form-label">Scegli un'abilità razziale</label>
              {selectedRace.racialAbilities.map((skill, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="skill"
                    id={`skill-${index}`}
                    onChange={(e) => setSelectedSkill(e.target.value)}
                    value={skill.abilityName}
                    checked={selectedSkill === skill.abilityName}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`skill-${index}`}
                  >
                    <strong>{skill.abilityName}</strong> – {skill.description}
                  </label>
                </div>
              ))}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">
            Conferma
          </button>
        </form>

        <div className="row mt-4">
          <div className="col-lg-12">
            {playerStats && (
              <div className="p-3 border rounded bg-white shadow-sm">
                <h2>
                  Ciao, sono <strong>{title}</strong>, un{" "}
                  <strong>{type}</strong> armato con <strong>{weapon}</strong>!
                </h2>
                <p>
                  Totale Attacco:{" "}
                  {selectedRace.attack + selectedWeapon.bonusAttack} <br />
                  Totale Difesa:{" "}
                  {selectedRace.defense + selectedWeapon.bonusDefense} <br />
                  HP: {selectedRace.hp}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
