import React from 'react'
import {verbs} from '../../Datas/verbs'
import RandomWords from '../../components/responsiveComponents/randomWords/RandomWords';

const NewVerbs = () => {
  
  return (
    <>
       <RandomWords 
        type='verb'
        words={[...verbs]}
       />
    </>
  )
}
export default NewVerbs
