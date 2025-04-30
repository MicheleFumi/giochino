import { useState } from "react";

import "./App.css";
import Player from "./assets/components/Player";
import Race from "./assets/components/Race";

function App() {
  /* const nome = prompt("inserisci il tuo nome");
  const attacco = prompt("inserisci l'attacco");
  const difesa = prompt("inserisci la difesa");
  const hp = prompt("inserisci gli hp"); */

  const Antonio = new Player("Antonio", new Race(15, 9000, 1300, "elfo"));

  console.log(Antonio);
  Antonio.saluto();

  return <></>;
}

export default App;
