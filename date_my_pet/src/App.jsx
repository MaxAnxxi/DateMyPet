import { useState } from "react";
import React from "react";
//link STYLESHEET//
import "./App.css";
//import components//
import NavBar from "./components/NavBar";
import MyProfil from "./components/MyProfil";
import Matching from "./components/Matching";
import Likes from "./components/Likes";
import Footer from "./components/Footer";

//pet img
import Jazzy from "./assets/Jazzy.jpg";
// import Tessla from "./assets/tessla.jpg";

const petList = [
  {
    petImage: Jazzy,

    petName: "Jazzy",
    petRace: "Persan Chinchilla",
    petAge: "2 ans",
    petLoof: "yes",

    petDescription:
      "Je suis une belle femelle, qui cherche un chat affectueux pour co-créer mes héritiers, je suis joueuse et sociable.",
  },

  {
    petImage: Jazzy,

    petName: "Tessla",
    petRace: "Sacré de Birmanie",
    petAge: "2 ans",
    petLoof: "yes",

    petDescription:
      "Belle et charmante. Elle est dsiponible toutes les 3 semaines.",
  },

  {
    petImage: Jazzy,

    petName: "Urssaf",
    petRace: "Sphynx",
    petAge: "2 ans",
    petLoof: "yes",

    petDescription: "Je suis sans poil mais vous serez au poil avec moi.",
  },
];

const Profile = {
  myImg: Jazzy,
  myPet: "Jazzy",
};

function App() {
  const [petIndex, setPetIndex] = useState(0);

  const handleClickButton = () => {
    if (petIndex < petList.length - 1) {
      setPetIndex(petIndex + 1);
    }
  };

  const [matchCount, setMatchCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <MyProfil img={Profile.myImg} petname={Profile.myPet} />
      <Matching pet={petList[petIndex]} clickButton={handleClickButton} />
      <Likes matchcount={matchCount}></Likes>
      <Footer></Footer>
    </>
  );
}

export default App;
