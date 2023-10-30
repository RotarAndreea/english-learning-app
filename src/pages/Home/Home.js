import React, {useRef, useState } from 'react'
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
import { VscArrowRight } from "react-icons/vsc";
import { ReactIcon } from '../../components/responsiveComponents/randomWords/RandomWordsStyles';


const Home = () => {
    const [lessonsBox, setLessonsBox]=React.useState(LessonsBoxData)
    const navigate = useNavigate();
    const containerRef=useRef(null);
    const[isDown, setIsDown]=useState(false);
    const [startX, setStartX]=useState(null);
    const [scrollLeft, setScrollLeft]=useState(null);

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

        const numberOfChoosedLessons= lessonsBox.filter(function(obj){
            return obj.choosed === true;
        }).length;
      
    const handleMouseDown=(e)=>{
        setIsDown(true);
        setStartX(e.pageX-containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    }
    const handleMouseLeave=()=>{
        setIsDown(false);
    }
    const handleMouseUp=()=>{
        setIsDown(false);
    }
    const handleMouseMove=(e)=>{
        if(!isDown) return;
       // e.preventDeafult();
        const x=e.pageX-containerRef.current.offsetLeft;
        const walk=(x-startX)*1.5;
        containerRef.current.scrollLeft=scrollLeft-walk;
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
                    See your progress 
                    <ReactIcon>
                        <VscArrowRight/>
                    </ReactIcon> 
                </Button>
            </Container>
            <CategoryText>DAILY PRACTICE</CategoryText>
            {numberOfChoosedLessons === 0 ?
                <div>Please choose a lesson to learn</div>
            :
                <HorizontalContainer 
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={(event)=>handleMouseMove(event)}
                >
                    {box}
                </HorizontalContainer>
            }
                       
            <CategoryText>NEW LESSONS TO LEARN</CategoryText>
            {numberOfChoosedLessons === 3 ?
                <div>You don't have nothing new to learn</div>
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