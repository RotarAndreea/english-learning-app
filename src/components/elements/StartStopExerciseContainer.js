import React from 'react'
import { Text } from '../styles/styles.text'
import { LessonIcon } from './images'
import { Button } from '../styles/styled.button'
import { HomeButton } from '../Buttons/HomeButton'
import { Container } from '../Containers/container'
import { VscArrowRight } from "react-icons/vsc";
import { ReactIcon } from '../responsiveComponents/randomWords/RandomWordsStyles'

const StartStopExerciseContainer = ({start,stop,iconStart,iconStop,text}) => {
  return (
    <Container align={'center'} >
            <Text>{stop === -1 ? `Are you ready to learn ${text}?` : `Congrats! You just learned ${text}!`}</Text>
            <LessonIcon src={ require(`../../media/images/${stop === -1 ? iconStart: iconStop}`)}/>
            <Button onClick={start} background={'#a79cc9'} >
                    <span>Learn</span>
                    <ReactIcon><VscArrowRight/></ReactIcon>
                    
            </Button>
            <HomeButton text={'HOME'} background={'#a79cc9'}  />
    </Container>
  )
}

export default StartStopExerciseContainer