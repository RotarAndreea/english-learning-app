import React from 'react'
import {CenterContainer, Container} from '../../components/Containers/container'
import Favorite from '../../components/elements/Favorite'
import { GlobalStyles } from '../../components/globalStyles'
import { Button } from '../../components/styles/styled.button'
import { FooterTextContainer, TextContainer, UpperContainer } from '../../components/styles/styled.container'
import { PrincipalLayout } from '../../components/styles/styled.layout'
import { FooterText} from '../../components/styles/styles.text'
import arrayNounsData from '../../Datas/nouns'
import ExerciseHeader from '../../components/elements/ExerciseHeader'
import StartStopExerciseContainer from '../../components/elements/StartStopExerciseContainer'

const NewNouns = () => {
  const [isFavorite, setIsFavorite]=React.useState(false);
  const [isShown, setIsShown]=React.useState(false);
  const[word,setWord]=React.useState(arrayNounsData.sort(() => 0.5 - Math.random())[0])
  const[words,setWords]=React.useState(()=>JSON.parse(localStorage.getItem("nouns")) || arrayNounsData)
  const[stop,setStop]=React.useState(-1); //stop=-1 it means that the lesson has not started, when stop=10 => the end of the lesson
  
  function starColor(){setIsFavorite(prevValue=> !prevValue)
  }

  function start(){
    setStop(0) //stop=0 it means that the lesson starts 
  }
  function showTranslate(){setIsShown(prevValue =>!prevValue)}
 
  function change(){ //function for randomly changing the word and increase the stop state
    let shuffled;
    do {
      shuffled = words.sort(() => 0.5 - Math.random());
    } while (shuffled[0].appeard === true);
    setWord(shuffled[0]);
    setWords(prevValue=>prevValue.map(wordData =>{
      return wordData.id === word.id ?
      {
        ...wordData,
        appeard: true 
      }
      : {...wordData  }})) 
    setStop(prevValue=>prevValue+1)
  }
  function addToFavorite(){ //function for randomly changing the word and increase the stop state
    setWords(prevValue=>prevValue.map(wordData =>{
      return wordData.id === word.id ?
      {
        ...wordData,
        isFavorite: true
      }
      : {...wordData  }})) 
  }
 
  React.useEffect(()=>{
    localStorage.setItem("nouns", JSON.stringify(words))
  },[words])
  
 /* React.useEffect(()=>{ //verify if the client reached 10 words. if he did, the task is over
    if(stop === 10){
      console.log("Felicitari! Ai indeplinit task-ul")
    }
  },[stop])
*/
  return (
    <>
        <GlobalStyles />
        <ExerciseHeader stop={stop} background={'#d0ca95'} progressColor={'#a79cc9'}/>
        <PrincipalLayout>

            {stop === 10 || stop === -1 ? //if it's the beggining of the lesson or the end, the words will not be displayed on the screen 
              <>
                    <StartStopExerciseContainer start={start} stop={stop} text={'10 new nouns'} iconStart={"rocket.png"} iconStop={'ballooons.png'}/>
              </>  
              :
              <>
                    <TextContainer background={'#eccf79'} textSize={2.5}>
                              <UpperContainer>
                                <CenterContainer>
                                    {word.value}
                                </CenterContainer>
                              </UpperContainer>
                              <FooterTextContainer>
                                  <FooterText onClick={showTranslate}>{isShown ? 'Hide the translate' : 'Show the translate'} </FooterText>
                                  <Favorite onClick={addToFavorite} handleClick={starColor} isFavorite={isFavorite} />
                              </FooterTextContainer>
                    </TextContainer>
                    {isShown &&
                    <TextContainer textSize={2.5}>
                              <CenterContainer>
                                  {word.translation}
                              </CenterContainer>
                    </TextContainer>
                    }
                    <Container align={'center'} >
                              <Button onClick={change} background={'#a79cc9'} >
                                  {stop === 9 ? 'Finish' : 'Next Word ????'} 
                              </Button>
                    </Container>
              </>
            }  
          </PrincipalLayout>
        
    </>
  )
}
export default NewNouns


 /*
  function extractTenWords(){
    const shuffled = arrayNounsData.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 10);
    setWords(selected)
  }
  */
  /*
  function extractTenWords(){
      setWords(prevValue=>prevValue.map((obj,index)=>({   //const[words,setWords]=React.useState([{},{},{},{},{},{},{},{},{},{}])
        ...obj,
        ...arrayNounsData[index]
      }) ))
  }
*/