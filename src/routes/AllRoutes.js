import React from 'react'
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import Home from '../pages/Home/Home'
import NewWords from '../pages/NewWords'

const AllRoutes = () => {


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/LearnNewWords" element={<NewWords/>}/>
      </Routes>
    </Router>
  
  )
}

export default AllRoutes