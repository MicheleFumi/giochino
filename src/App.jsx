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
  const [step, setStep] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();

    // Trova la razza scelta
    const choosedRace = raceList.find((race) => race.type === type);
    const choosedWeapon = weaponList.find((w) => w.name === weapon);

    // Trova l'abilità razziale scelta
    const choosedAbility = choosedRace.racialAbilities.find(
      (ability) => ability.abilityName === selectedSkill
    );
    console.log(choosedAbility);

    // Crea il personaggio con la razza, l'abilità e l'arma
    const player = new Player(
      `${title}`,
      new Race(
        choosedRace.attack,
        choosedRace.defense,
        choosedRace.hp,
        choosedRace.type,
        choosedAbility // Passa direttamente le abilità razziali
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
        {step === 1 && (
          <div className="mb-4">
            <label className="form-label">Nome del giocatore</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Inserisci il nome"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <button
              className="btn btn-primary mt-2"
              onClick={() => title && setStep(2)}
            >
              Avanti
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="mb-4">
            <label className="form-label">Scegli la razza</label>
            {raceList.map((race, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="race"
                  value={race.type}
                  onChange={(e) => {
                    setType(e.target.value);
                    setSelectedRace(race); // questo serve per mostrare le abilità nel prossimo step
                  }}
                  checked={type === race.type}
                />
                <label className="form-check-label">{race.type}</label>
              </div>
            ))}
            <button
              className="btn btn-primary mt-2"
              onClick={() => selectedRace && setStep(3)}
            >
              Avanti
            </button>
          </div>
        )}

        {step === 3 && selectedRace && (
          <div className="mb-4">
            <label className="form-label">Scegli un'abilità razziale</label>
            {selectedRace.racialAbilities.map((skill, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="skill"
                  value={skill.abilityName}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  checked={selectedSkill === skill.abilityName}
                />
                <label className="form-check-label">
                  {skill.abilityName} -
                </label>
                <small> {skill.description}</small>
              </div>
            ))}
            <button
              className="btn btn-primary mt-2"
              onClick={() => selectedSkill && setStep(4)}
            >
              Avanti
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="mb-4">
            <label className="form-label">Scegli l'arma</label>
            {weaponList.map((w, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="weapon"
                  value={w.name}
                  onChange={(e) => setWeapon(e.target.value)}
                  checked={weapon === w.name}
                />
                <label className="form-check-label">{w.name}</label>
              </div>
            ))}
            <button className="btn btn-success mt-2" onClick={handleSubmit}>
              Crea il personaggio
            </button>
          </div>
        )}

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
