import React from 'react'
import {nouns} from '../../Datas/nouns'
import RandomWords from '../../components/responsiveComponents/randomWords/RandomWords'

const NewNouns = () => {
  
  return ( 
    <>
        <RandomWords 
            type='noun'
            words={[...nouns]}
        />
    </>
  )
}
export default NewNouns
