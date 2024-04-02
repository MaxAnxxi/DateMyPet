import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import MyProfil from './components/MyProfil'
import Jazzy from './assets/Jazzy.jpg'

const Profile={
  myImg : Jazzy,
  myPet : "Jazzy",
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Footer></Footer>
      <NavBar></NavBar>
        <MyProfil img={Profile.myImg} petname={Profile.myPet}></MyProfil>
    </>
  )
}

export default App;