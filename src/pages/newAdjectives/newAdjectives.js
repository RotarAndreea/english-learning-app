import React from 'react'
import RandomWords from '../../components/responsiveComponents/randomWords/RandomWords'
import { adjectives } from '../../Datas/adjectives'

const newAdjectives = () => {
  return (
    <>
        <RandomWords 
            type='adjective'
            words={[...adjectives]}
        />
    </>
  )
}

export default newAdjectives