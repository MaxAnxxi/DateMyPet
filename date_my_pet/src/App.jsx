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
import Tessla from "./assets/tessla.png";
import Urssaf from "./assets/Ursaff.jpg";
import Mitsuki from "./assets/Mitsuki.jpg";
import Muta from "./assets/Muta.jpg";
import LaFouine from "./assets/LaFouine.jpg";
import Satine from "./assets/Satine.jpg";

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
    petImage: Tessla,

    petName: "Tessla",
    petRace: "Sacré de Birmanie",
    petAge: "2 ans",
    petLoof: "yes",

    petDescription:
      "Belle et charmante. Elle est disponible toutes les 3 semaines,Belle et charmante. Elle est disponible toutes les 3 semaines"
  },

  {
    petImage: Urssaf,

    petName: "Urssaf",
    petRace: "Sphynx",
    petAge: "2 ans",
    petLoof: "yes",

    petDescription:
      "Je suis sans poil mais vous serez au poil avec moi. Sphynx mais pas que , je pourrais devenir votre Phare à on",
  },
  {
    petImage : Mitsuki,
    petName: "Mitsuki",
    petRace: "Sacré de Birmanie",
    petAge: "2 ans",
    petLoof : "yes",
    petDescription : "Petite sacré de Birmanie , cherche à trouver son sacré partenaire !"
  },
  {
    petImage : Muta,
    petName: "Muta",
    petRace: "Japon",
    petAge: "5 ans",
    petLoof : "no",
    petDescription : "Coming from far , but willing to make you close to me"

  },
  {
    petImage: LaFouine,
    petName: "LaFouine",
    petRace: "Batard",
    petAge: "10 ans",
    petLoof : "yes",
    petDescription : "Dans le rap game depuis longtemps , je saurais te satisfaire tel le Prince de Bel Air"
  },
  {
    petImage : Satine,
    petName : "Satine",
    petRace : "Goutière",
    petAge : "3 ans",
    petLoof : "no",
    petDescription : "Princesse avec un coeur à prendre , on peut avoir un chaton mais pas 15."
  }

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
      <Matching pet={petList[petIndex]} clickButton={handleClickButton} match={setMatchCount} actualMatch={matchCount} />
      <Likes matchcount={matchCount}></Likes>
      <Footer></Footer>
    </>
  );
}

export default App;
