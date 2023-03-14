import React from 'react'
//import {ThemeProvider} from "styled-components";
import { Container, FooterButtonsContainer, ResponsiveContainer } from '../../components/Containers/container';
import { HorizontalContainer } from '../../components/Containers/horizontalSliderContainer';
import { FooterIcon, Icon, Image } from '../../components/elements/images';
import { GlobalStyles } from '../../components/globalStyles';
import {NewLessonsColumn } from '../../components/styles/style.column';
import { NewThingsButton, Button } from '../../components/styles/styled.button';
import { PrincipalLayout } from '../../components/styles/styled.layout';
import { CategoryText, SubTitle, Title } from '../../components/tags/texts';
import HeaderIcon from '../../media/images/header-icon.png'
import SavedWords from '../../media/images/round-heart.png'
import Calendar from '../../media/images/calendar.png'
import WrongAnswer from '../../media/images/wrong-answer.png'
import { useNavigate } from 'react-router-dom';
import { Header } from '../../layouts/Header';
import {LessonsBoxData} from "./LessonsBoxData"
import LessonBox from './LessonsBox';

const Home = () => {
    const [lessonsBox, setLessonsBox]=React.useState(LessonsBoxData)
    const navigate = useNavigate();

    const navigateToAnotherPage = (address)=> {
        navigate(address);
    };

    const box =lessonsBox.map(boxData =>(
        <LessonBox
            key={boxData.id}
            boxData={boxData}
            handleClick={deleteColumn}
        />
    ))
    function deleteColumn(event,id){
        event.stopPropagation()  // the RemoveButton element is a child of LessonsBox element and this events stop propagation from child to the parent
        setLessonsBox(prevValue=>prevValue.map(value =>{
            return value.id === id ?
                {
                  ...value,
                  choosed: false
                } 
                :
                {...value}
        }));
      }

  return (
   // <ThemeProvider>
       <>
       
         <GlobalStyles/>
         <Header background={'#160803'}>
            <ResponsiveContainer width={13}>
                <Icon src={HeaderIcon} />
            </ResponsiveContainer>
            <ResponsiveContainer>
                <Title color={'white'}>BeARealSpiker</Title>
                <SubTitle color={'white'}>Learn everyday</SubTitle>
            </ResponsiveContainer>
         </Header>
         <PrincipalLayout >
            <Container align={'center'} >
                <Button onClick={()=>navigateToAnotherPage('/PersonalProgress')} background={'#b45231'}>
                    See your progress 🡺 
                </Button>
            </Container>
            <CategoryText>DAILY PRACTICE</CategoryText>
            <HorizontalContainer >
                {box}
            </HorizontalContainer>
            <CategoryText>NEW LESSONS TO LEARN</CategoryText>
            <NewLessonsColumn centerJustify={'center'}>
                        <Title> Learn New Things</Title>
                        <SubTitle> 5 expressions a day</SubTitle>
                        <NewThingsButton>{'>'}</NewThingsButton>
            </NewLessonsColumn>
            <FooterButtonsContainer>
                <FooterIcon src={WrongAnswer}/>
                <FooterIcon src={SavedWords}/>
                <FooterIcon src={Calendar}/>
            </FooterButtonsContainer>
            
         </PrincipalLayout>
    
       </>
  //  </ThemeProvider>
  )
}

export default Home