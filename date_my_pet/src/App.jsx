import Matching from "./components/Matching";
import { useState } from 'react';
import './App.css';
import React from "react";
import Jazzy from "./assets/Jazzy.png";

const petList = [
  {
    petImage: Jazzy,
    petName: "Jazzy",
    petDescription: "La plus belle au monde!",
  },
  {
    petImage: Jazzy,
    petName: "Flash",
    petDescription: "beau gosse"
  },
];

function App() {
  const [petIndex, setPetIndex] = useState(0)

  const handleClickButton = () => {
    if (petIndex < petList.lenght - 1) {
      setPetIndex(petIndex + 1)
    }
  };

  return (
    <>
      <div class="Matching">
        <Matching pet={petList[petIndex]} clickButton={handleClickButton} />
      </div>
    </>
  );
}

export default App;
