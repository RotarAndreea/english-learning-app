import React from 'react'
import { useNavigate } from 'react-router';
import { CircularProgress } from '../../components/elements/circularProgress/CircularProgress';
import { Image } from '../../components/elements/images';
import { LessonsBox } from '../../components/styles/style.column';
import { RemoveButton } from '../../components/styles/styled.button';
import { SubTitle, Title } from '../../components/tags/texts';

const LessonBox = ({navigateTo,title,subtitle, image,color, progressValue}) => {
  const navigate = useNavigate();
  
  const navigateToAnotherPage = ()=> {
      navigate(navigateTo);
  };



  return (
    <>
      <LessonsBox onClick={navigateToAnotherPage}  >
        <RemoveButton  >
          X
        </RemoveButton>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Image src={image}/>
        <CircularProgress color={color} progressValue={progressValue} />
      </LessonsBox>
    </>
  )
}

export default LessonBox