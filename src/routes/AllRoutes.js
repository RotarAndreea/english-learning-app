import React from 'react'
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import Home from '../pages/Home/Home'
import NewExpressions from '../pages/NewExpressions'
import NewVerbs from '../pages/NewVerbs'
import NewNouns from '../pages/NewNouns'
import PersonalProgress from '../pages/PersonalProgress'

const AllRoutes = () => {


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/PersonalProgress" element={<PersonalProgress/>}/>
          <Route path="/LearnNewNouns" element={<NewNouns/>}/>
          <Route path="/LearnNewExpressions" element={<NewExpressions/>}/>
          <Route path="/LearnNewVerbs" element={<NewVerbs/>}/>
      </Routes>
    </Router>
  
  )
}

export default AllRoutes