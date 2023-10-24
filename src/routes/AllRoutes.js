import React from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from '../pages/Home/Home'
import NewVerbs from '../pages/newVerb/NewVerbs'
import NewNouns from '../pages/NewNouns/NewNouns'
import PersonalProgress from '../pages/PersonalProgress'
import NewExpressions from '../pages/newExpressions/NewExpressions'
import FavoriteWords from '../pages/favoriteWords/FavoriteWords'
import NewAdjectives from '../pages/newAdjectives/newAdjectives'

const AllRoutes = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/PersonalProgress" element={<PersonalProgress/>}/>
          <Route path="/LearnNewNouns" element={<NewNouns/>}/>
          <Route path="/LearnNewExpressions" element={<NewExpressions/>}/>
          <Route path="/LearnNewVerbs" element={<NewVerbs/>}/>
          <Route path="/LearnNewAdjectives" element={<NewAdjectives/>}/>
          <Route path="/FavoriteItems" element={<FavoriteWords/>}/>
      </Routes>
    </Router>
  
  )
}

export default AllRoutes