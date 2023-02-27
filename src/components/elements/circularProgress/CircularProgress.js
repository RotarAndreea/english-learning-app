import React from 'react'
import { CircleProgress, ValueContainer } from './CircularProgressElements'

export const CircularProgress = ({progressValue,color, className}) => {
  return (
    <CircleProgress 
        color={color} 
        progressValue={progressValue}
        className={className}
    >
      <ValueContainer> {progressValue}% </ValueContainer>
    </CircleProgress>
  )
}
