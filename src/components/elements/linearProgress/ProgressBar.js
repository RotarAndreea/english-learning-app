import React from 'react'
import { RowFlex } from '../../display/flex'
import { EmptyLine, ProgressLine, ProgressValue } from './linearProgressElements'

const ProgressBar = ({progressValue}) => {
  return (
    <RowFlex>
        <ProgressValue>{progressValue}%</ProgressValue>
        <EmptyLine>
            <ProgressLine progressValue={progressValue}/>
        </EmptyLine>
    </RowFlex>
    
  )
}

export default ProgressBar