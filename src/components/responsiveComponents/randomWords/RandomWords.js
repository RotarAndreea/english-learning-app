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
    const [isFavorite,setIsFavorite]=useState(false);
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
        console.log(randomWord)
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`;
        try {
            const response = await fetch(url);
            var result = await response.json();
            
        } catch (error) {
            console.error(error);
        }
        var finded=wantedPartOfSpeech(result);
      }while(finded < 0)
      setWord(result[objectIndex]);   
        // verify if the word is already added to favorite list 
          const isWordInLocalStorage = JSON.parse(localStorage.getItem(`favorite${type}`));
            let favoriteItemIndex=isWordInLocalStorage.findIndex( //will find just the first element that has the same name as the other word
              (favoriteWord)=>favoriteWord.word===result[objectIndex].word)
            return favoriteItemIndex >-1 ? 
            setIsFavorite(true) : setIsFavorite(false) //if the world is already in favorite list, i will sidplay a red heart
    }
  
    function wantedPartOfSpeech(word){   
      let foundMeaningIndex=false; 
      word.some((obj,i)=>{
        foundMeaningIndex=obj.meanings.findIndex(meaning=>
        meaning.partOfSpeech===`${type}`);
        if(foundMeaningIndex !==-1){
          objectIndex=i;
          setMeaningIndex(foundMeaningIndex)
          return true;
        }
        return false;
     })
     return foundMeaningIndex;
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

    const addToFavorite=()=>{  
      setIsFavorite(prevValue=>!prevValue)  
      !localStorage.getItem(`favorite${type}`) &&
      localStorage.setItem(`favorite${type}`,JSON.stringify([]))
      const existingFavoritesWords=JSON.parse(localStorage.getItem(`favorite${type}`));
      let favoriteItemIndex=existingFavoritesWords.findIndex( //will find just the first element that has the same name as the other word
          (favoriteWord)=>favoriteWord.word===word.word)
      if(favoriteItemIndex<0){
        existingFavoritesWords.push(word);
        localStorage.setItem(`favorite${type}`,JSON.stringify(existingFavoritesWords))
      }
      else if(favoriteItemIndex >=0){
        const newArray=existingFavoritesWords.filter(wordData =>
          wordData.word !== word.word );
          console.log(existingFavoritesWords)
          localStorage.setItem(`favorite${type}`,JSON.stringify(newArray))

        }
      console.log(JSON.parse(localStorage.getItem(`favorite${type}`)))
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
                                    <FooterText onClick={showTranslate}>{isShown ? 'Hide informations' : 'Show more'} </FooterText>
                                    <Favorite  addToFavorite={addToFavorite} isFavorite={isFavorite}/>
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
                                    {stop === 9 ? 'Finish' : `Next Word`} 
                                </Button>
                      </Container>
                </>
              }  
            </PrincipalLayout>
          
      </>
    )
  }
  
  export default RandomWords
  