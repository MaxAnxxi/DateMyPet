import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import MyProfil from "./components/MyProfil";
import Jazzy from "./assets/Jazzy.jpg";
import Likes from "./components/Likes";

import Matching from "./components/Matching";
import React from "react";
//pet images
import Jazzy from "./assets/Jazzy.png";

function App() {
  const [petIndex, setPetIndex] = useState(0);

  const petList = [
    {
      petImage: Jazzy,
      petName: "Jazzy",
      petDescription: "La plus belle au monde!",
    },
    {
      petImage: Jazzy,
      petName: "Flash",
      petDescription: "beau gosse",
    },
  ];

  const handleClickButton = () => {
    if (petIndex < petList.lenght - 1) {
      setPetIndex(petIndex + 1);
    }
  };

  const [matchCount, setMatchCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <MyProfil img={Profile.myImg} petname={Profile.myPet}></MyProfil>
      <div class="Matching">
        <Matching pet={petList[petIndex]} clickButton={handleClickButton} />
        <Likes matchcount={matchCount}></Likes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
