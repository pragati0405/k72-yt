import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Page/Home'
import Agence from './Page/Agence'
import Projects from './Page/Projects'
import Navbar from './Components/nav/Navbar'
 

const App = () => {
  
  return (
   <div>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/agence' element={<Agence/>}/>
      <Route path='/projects' element={<Projects/>}/>
     </Routes>
    </div>
  )
}

export default App
