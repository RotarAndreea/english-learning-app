import React from 'react'
import { NewLessonsColumn } from '../../components/styles/style.column'
import { NewThingsButton } from '../../components/styles/styled.button'
import { SubTitle, Title } from '../../components/tags/texts'

const NewLessonsToLearnBox = (props) => {
  return (
    <>
        <NewLessonsColumn centerJustify={'center'} choosed={props.boxData.choosed}>
                        <Title> Learn {props.boxData.title}</Title>
                        <SubTitle> {props.boxData.subtitle}</SubTitle>
                        <NewThingsButton onClick={(event) =>props.handleClick(event,props.boxData.id)}>add</NewThingsButton>
        </NewLessonsColumn>
    </>
  )
}

export default NewLessonsToLearnBox