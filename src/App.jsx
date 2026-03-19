import { useState } from 'react'
import './App.css'
import Boba from './pages/boba'
import Noodles from './pages/noodles'
import Meal from './pages/meal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Boba></Boba>
   <Noodles></Noodles>
   <Meal></Meal>
   </>
  )
}

export default App
