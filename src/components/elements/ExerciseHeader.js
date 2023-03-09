import React from 'react'
import { Header } from '../../layouts/Header'
import CloseButton from '../Buttons/CloseButton'
import { ResponsiveContainer } from '../Containers/container'
import ProgressBar from './linearProgress/ProgressBar'

const ExerciseHeader = (props) => {
  return (
    <Header background={'#d0ca95'} >
                  <ResponsiveContainer width={80} paddingTop={'1.5'}>
                    <ProgressBar progressColor={props.progressColor}  progressValue={props.stop === -1 ? 0 : props.stop*10}/>
                  </ResponsiveContainer>
                  <CloseButton/>
    </Header>
  )
}

export default ExerciseHeader