import React, {useState } from "react";
import { CenterContainer, Container, FitContentContainer } from "../../Containers/container";
import ExerciseHeader from "../../elements/ExerciseHeader";
import Favorite from "../../elements/Favorite";
import StartStopExerciseContainer from "../../elements/StartStopExerciseContainer";
import { GlobalStyles } from "../../globalStyles";
import { Button } from "../../styles/styled.button";
import { FooterTextContainer, TextContainer, UpperContainer } from "../../styles/styled.container";
import { PrincipalLayout } from "../../styles/styled.layout";
import { FooterText } from "../../styles/styles.text";

const RandomWords = ({type,words}) => {
    const[stop,setStop]=React.useState(-1); //stop=-1 it means that the lesson has not started, when stop=10 => the end of the lesson
    const [isShown, setIsShown]=React.useState(false);
    const [word,setWord]= useState('');
    const [meaningIndex,setMeaningIndex]= useState(-1);
    var objectIndex=-1;
  
    function start(){
      setStop(0) //stop=0 it means that the lesson starts 
      fetchData();
    }
    function showTranslate(){setIsShown(prevValue =>!prevValue)}
  
    const fetchData=async()=>{
      do{
        const randomWord = words[Math.floor(Math.random() * words.length)];
        console.log('random word: '+randomWord)
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`;
        try {
            const response = await fetch(url);
            var result = await response.json();
            
        } catch (error) {
            console.error(error);
        }
        var finded=wantedPartOfSpeech(result);
      }while(finded === false)
      setWord(result[objectIndex]);
      console.log(result);
    }
  
    function wantedPartOfSpeech(word){    
     word.some((obj,i)=>{
      const foundMeaningIndex=obj.meanings.findIndex(meaning=>
        meaning.partOfSpeech===`${type}`);
        if(foundMeaningIndex !==-1){
          objectIndex=i;
          setMeaningIndex(foundMeaningIndex)
          return true;
        }
        return false;
     })
    }
  
    function change(){
      const randomElement = words[Math.floor(Math.random() * words.length)];
      fetchData(randomElement);
      setStop(prevValue=>prevValue+1)
    }
  
    const renderDefinitions=()=>{
      return word.meanings[meaningIndex].definitions.map(definition =>(
        <div key={definition.definition}>
              * {definition.definition}
        </div>
      ))
    }
    return (
      <>
          <GlobalStyles />
          <ExerciseHeader stop={stop} background={'#d0ca95'} progressColor={'#a79cc9'}/>
          <PrincipalLayout>
  
              {stop === 10 || stop === -1 ? //if it's the beggining of the lesson or the end, the words will not be displayed on the screen 
                <>
                      <StartStopExerciseContainer start={start} stop={stop} text={`10 new ${type}s`} iconStart={"rocket.png"} iconStop={'ballooons.png'}/>
                </>  
                :
                <>
                      <TextContainer background={'#eccf79'} textSize={2.5}>
                                <UpperContainer>
                                  <CenterContainer>
                                      {word.word}
                                  </CenterContainer>
                                </UpperContainer>
                                <FooterTextContainer>
                                    <FooterText onClick={showTranslate}>{isShown ? 'Hide the translate' : 'Show the translate'} </FooterText>
                                    <Favorite  />
                                </FooterTextContainer>
                      </TextContainer>
                      {isShown &&
                      <TextContainer textSize={0.8}>
                        <FitContentContainer>
                            <b>phonetic:</b> {word.phonetic}<br/>
                            <b>meanings:</b> {renderDefinitions()}
                        </FitContentContainer>
                      </TextContainer>
                      }
                      <Container align={'center'} >
                                <Button  background={'#a79cc9'} onClick={()=>change()}>
                                    {stop === 9 ? 'Finish' : 'Next Word 🡺'} 
                                </Button>
                      </Container>
                </>
              }  
            </PrincipalLayout>
          
      </>
    )
  }
  
  export default RandomWords
  