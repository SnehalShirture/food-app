import React from 'react'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'




function Myroutes() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/menu' element={<Menu/>}></Route>
                <Route path='/profile' element={<Home/>}></Route>
                <Route path='/myorder' element={<Home/>}></Route>
                <Route path='/cart' element={<Home/>}></Route>
            
                
            </Routes>
        </Router>
    </div>
  )
}

export default Myroutes