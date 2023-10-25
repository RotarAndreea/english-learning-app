import React from 'react'
import { useNavigate } from 'react-router';
import { CircularProgress } from '../../components/elements/circularProgress/CircularProgress';
import { Image } from '../../components/elements/images';
import { LessonsBox } from '../../components/styles/style.column';
import { RemoveButton } from '../../components/styles/styled.button';
import { SubTitle, Title } from '../../components/tags/texts';

const LessonBox = (props) => {
  const navigate = useNavigate();
  
  const navigateToAnotherPage = ()=> {
      navigate(props.boxData.navigateTo);
  };

  return (
    <>
      <LessonsBox onClick={navigateToAnotherPage} choosed={props.boxData.choosed} >
        <RemoveButton onClick={(event)=>props.handleClick(event,props.boxData.id)}>
          X
        </RemoveButton>
        <Title>{props.boxData.title}</Title>
        <SubTitle>{props.boxData.subtitle}</SubTitle>
        <Image src={props.boxData.image} draggable="false"/>
        <CircularProgress color={props.boxData.color} progressValue={props.boxData.progressValue} />
      </LessonsBox>
    </>
  )
}

export default LessonBox