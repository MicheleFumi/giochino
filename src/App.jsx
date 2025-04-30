import { useState } from "react";

import "./App.css";
import Player from "./assets/components/Player";
import Race from "./assets/components/Race";
import raceList from "./assets/components/db/raceList";
function App() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [selectedRace, setSelectedRace] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    const choosedRace = raceList.find((race) => race.type === type);

    const player = new Player(
      `${name}`,
      new Race(
        choosedRace.attack,
        choosedRace.defense,
        choosedRace.hp,
        choosedRace.type
      )
    );

    player.saluto();
    return setSelectedRace(choosedRace);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="inserisci il nome del giocatore"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="mb-3">
          {raceList.map((race, index) => (
            <div key={index}>
              <input
                type="radio"
                name="type"
                id="type"
                onChange={(e) => setType(e.target.value)}
                value={race.type}
                checked={type === race.type}
              />
              <small>tipo:{race.type} </small>
              <small>attacco:{race.attack} </small>
              <small>difesa:{race.defense} </small>
              <small>hp:{race.hp} </small>
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">
          conferma
        </button>
      </form>

      {selectedRace && (
        <h2>
          ciao sono {name}, sono un {type}, con {selectedRace.attack} di
          attacco, {selectedRace.defense} di difesa e {selectedRace.hp} di vita
        </h2>
      )}
    </>
  );
}

export default App;
