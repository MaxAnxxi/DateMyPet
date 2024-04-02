import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import MyProfil from './components/MyProfil'
import Jazzy from './assets/Jazzy.jpg'
import Likes from './components/Likes'

const Profile={
  myImg : Jazzy,
  myPet : "Jazzy",
}


function App() {
  const [matchCount, setMatchCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <MyProfil img={Profile.myImg} petname={Profile.myPet}></MyProfil>
      <Likes matchcount={matchCount}></Likes>
      <Footer></Footer>
      
    </>
  )
}

export default App;