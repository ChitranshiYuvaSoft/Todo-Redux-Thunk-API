import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import  Form  from './Components/Form'
import ListGroup from './Components/ListGroup'

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/data' element={<ListGroup/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App