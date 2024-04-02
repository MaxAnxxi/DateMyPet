import { useState } from 'react'
import './App.css'
import Likes from './components/Likes'

function App() {
  const [matchCount, setMatchCount] = useState(0)

  return (
    <>
      <Likes matchcount={matchCount}></Likes>
    </>
  )
}

export default App
