import React from 'react'
//import {ThemeProvider} from "styled-components";
import { Container, FooterButtonsContainer, ResponsiveContainer } from '../../components/Containers/container';
import { HorizontalContainer } from '../../components/Containers/horizontalSliderContainer';
import { FooterIcon, Icon} from '../../components/elements/images';
import { GlobalStyles } from '../../components/globalStyles';
import { Button } from '../../components/styles/styled.button';
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
import NewLessonsToLearnBox from './NewLessonsToLearnBox';

const Home = () => {
    const [lessonsBox, setLessonsBox]=React.useState(LessonsBoxData)
    const [displayDailyPracticeText, setDisplayDailyPracticeText]=React.useState(true)
    const [displayNewLessonsText, setDisplayNewLessonsText]=React.useState(true)
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
    const newLessonsToLearn=lessonsBox.map(boxData =>(
        <NewLessonsToLearnBox
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
                  choosed: !value.choosed
                } 
                :
                {...value}
        }));
      }

      React.useEffect(()=>{
        toggleText()
        toggleDailyPracticeText()
      },[lessonsBox])
      const toggleText = ()=> {
        if(lessonsBox[0].choosed === true && lessonsBox[1].choosed === true && lessonsBox[2].choosed === true)
            setDisplayNewLessonsText(true)
        else
            setDisplayNewLessonsText(false)
    };
      const toggleDailyPracticeText = ()=> {
        if(lessonsBox[0].choosed === false && lessonsBox[1].choosed === false && lessonsBox[2].choosed === false)
            setDisplayDailyPracticeText(true)
        else
            setDisplayDailyPracticeText(false)
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
                <Title color={'white'}>BeARealSpeaker</Title>
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
            {displayDailyPracticeText ?
                'Add new lessons to practice'
                :
                <HorizontalContainer >
                    {box}
                </HorizontalContainer>
            }
            <CategoryText>NEW LESSONS TO LEARN</CategoryText>
            {displayNewLessonsText  ?
                'Nothing new to share'
            :
                <HorizontalContainer>
                        {newLessonsToLearn} 
                </HorizontalContainer>
            }
            <FooterButtonsContainer>
                <FooterIcon src={WrongAnswer} />
                <FooterIcon src={SavedWords} onClick={() => navigateToAnotherPage("/FavoriteItems")}/>
                <FooterIcon src={Calendar}/>
            </FooterButtonsContainer>
            
         </PrincipalLayout>
    
       </>
  //  </ThemeProvider>
  )
}

export default Home