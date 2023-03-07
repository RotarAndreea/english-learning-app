import React from 'react'
//import {ThemeProvider} from "styled-components";
import { Container, FooterButtonsContainer, ResponsiveContainer } from '../../components/Containers/container';
import { HorizontalContainer } from '../../components/Containers/horizontalSliderContainer';
import { CircularProgress } from '../../components/elements/circularProgress/CircularProgress';
import { FooterIcon, Icon, Image } from '../../components/elements/images';
import { GlobalStyles } from '../../components/globalStyles';
import { LessonsColumn, NewLessonsColumn } from '../../components/styles/style.column';
import { NewThingsButton, Button } from '../../components/styles/styled.button';
import { PrincipalLayout } from '../../components/styles/styled.layout';
import { CategoryText, SubTitle, Title } from '../../components/tags/texts';
import ExpressionsImage from '../../media/images/sponge.png'
import VerbImage from '../../media/images/word-study.png'
import HeaderIcon from '../../media/images/header-icon.png'
import NounImage from '../../media/images/expressions.png'
import SavedWords from '../../media/images/round-heart.png'
import Calendar from '../../media/images/calendar.png'
import WrongAnswer from '../../media/images/wrong-answer.png'
import { useNavigate } from 'react-router-dom';
import { Header } from '../../layouts/Header';
 
const Home = () => {

    const navigate = useNavigate();

    const navigateToAnotherPage = (address)=> {
        navigate(address);
    };

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
            <HorizontalContainer>
                <LessonsColumn onClick={()=> navigateToAnotherPage('/LearnNewNouns')}>
                    <Title> New Nouns</Title>
                    <SubTitle> 10 nouns a day</SubTitle>
                    <Image src={NounImage}/>
                    <CircularProgress color={"brown"} progressValue={70} />
                </LessonsColumn>             
                <LessonsColumn onClick={()=> navigateToAnotherPage('/LearnNewExpressions')} >
                        <Title> New Expressions</Title>
                        <SubTitle> 5 expressions a day</SubTitle>
                        <Image src={ExpressionsImage}/>
                        <CircularProgress color={"#f2e25a"} progressValue={50} />
                </LessonsColumn>
                <LessonsColumn onClick={()=> navigateToAnotherPage('/LearnNewVerbs')}>
                        <Title> New Verbs</Title>
                        <SubTitle> 10 verbs a day</SubTitle>
                            <Image src={VerbImage}/>
                        <CircularProgress color={"orange"} progressValue={10} />
                </LessonsColumn>
            </HorizontalContainer>
            <CategoryText>NEW LESSONS TO LEARN</CategoryText>
            <NewLessonsColumn centerJustify={'center'} >
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