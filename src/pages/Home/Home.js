import React from 'react'
//import {ThemeProvider} from "styled-components";
import { Container } from '../../components/Containers/container';
import { HorizontalContainer } from '../../components/Containers/horizontalSliderContainer';
import { CircularProgress } from '../../components/elements/circularProgress/CircularProgress';
import { Image } from '../../components/elements/images';
import { GlobalStyles } from '../../components/globalStyles';
import { LessonsColumn } from '../../components/styles/style.column';
import { SimpleButton } from '../../components/styles/styled.button';
import { PrincipalLayout } from '../../components/styles/styled.layout';
import { CategoryText, SubTitle, Title } from '../../components/tags/texts';
import WordImage from '../../media/images/sponge.png'
import VerbImage from '../../media/images/word-study.png'
import ExpressionsImage from '../../media/images/expressions.png'

const Home = () => {

    

  return (
   // <ThemeProvider>
       <>
       
         <GlobalStyles/>
         <PrincipalLayout>
            <Container align={'center'} >
                <SimpleButton>
                    See your progress 🡺 
                </SimpleButton>
            </Container>
            <CategoryText>DAILY PRACTICE</CategoryText>
            <HorizontalContainer>
                <LessonsColumn >
                    <Title> New Words</Title>
                    <SubTitle> 10 words a day</SubTitle>
                    <Image src={WordImage}/>
                    <CircularProgress color={"#f2e25a"} progressValue={70} />
                </LessonsColumn>             
                <LessonsColumn>
                        <Title> New Expressions</Title>
                        <SubTitle> 5 expressions a day</SubTitle>
                        <Image src={ExpressionsImage}/>
                        <CircularProgress color={"brown"} progressValue={50} />
                </LessonsColumn>
                <LessonsColumn>
                        <Title> New Verbs</Title>
                        <SubTitle> 10 verbs a day</SubTitle>
                            <Image src={VerbImage}/>
                        <CircularProgress color={"orange"} progressValue={10} />
                </LessonsColumn>
            </HorizontalContainer>
            <CategoryText>NEW LESSONS TO LEARN</CategoryText>

            
         </PrincipalLayout>
       </>
  //  </ThemeProvider>
  )
}

export default Home