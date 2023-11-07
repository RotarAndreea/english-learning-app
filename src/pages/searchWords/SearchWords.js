import React, { useState } from 'react'
import { GlobalStyles } from '../../components/globalStyles'
import { Header } from '../../layouts/Header'
import CloseButton from '../../components/Buttons/CloseButton'
import { AdjustedHeightLayout, DefinitionsContainer, FullHeightLayout, HorisontalAlign, SearchBar, SearchBarButton, SearchBarContainer, WordContainer} from './searchWordsStyles'
import { CenterContainer } from '../../components/Containers/container'
import { VscSearch } from "react-icons/vsc";
import { VscUnmute } from "react-icons/vsc";
import { AudioIcon } from '../../components/responsiveComponents/randomWords/RandomWordsStyles'

const SearchWords = () => {
    const [searchedWord, setSearchedWord]=useState('');
    const [showWordInfo, setShowWordInfo]=useState(false);
    const [displayWords, setDisplayWords]=useState('');
    const [matchedWord, setMatchedWord]=useState('Please enter a word and press search');

    function handleChange(event){
            setSearchedWord(event.target.value)
    }

    const searchInputWord=async()=>{
          const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
          try {
              const response = await fetch(url);
              var result = await response.json();
              if(result.title ==='No Definitions Found'){
                    setShowWordInfo(false);
                    setTimeout(() => {
                        setMatchedWord('Please enter a word and press search')
                    }, 2500);
                    setMatchedWord('Please choose another word!')
                return
              }
          }catch (error) {
              console.error(error);
          }
        console.log(result);
        setMatchedWord(result[0]);
        setDisplayWords(result.map((object,i)=>{ //map throught all objects (result[0], result[1]...)
            return (
                <WordContainer key={i} >
                    {object.meanings.map((objectPartOfSpeech,i)=>{ //map throught all part of speech (noun, adjective...)
                        return (
                            <WordContainer key={i}>
                                <div><u>part of speech:</u> <b>{objectPartOfSpeech.partOfSpeech}</b></div>
                                <DefinitionsContainer>{objectPartOfSpeech.definitions.map((definition,i) =>i<=5 &&( // map throught all definitions 
                                        <div key={i}>{i+1}. {definition.definition}</div>
                                     ))}
                                </DefinitionsContainer>
                            </WordContainer>
                        )
                    })}
                </WordContainer>
            )
        }))
      setShowWordInfo(true);  
       console.log(displayWords)
      }

      function AudioPlayer(){
        const audio=matchedWord.phonetics.map(audio =>{
          return audio.audio &&  //if audio path is empty, don't show the object
            <VscUnmute 
                key={audio.audio}
                onClick={()=>handleClick(audio.audio)}
                style={{marginLeft:'5px'}}
            />
        }
        )
        const handleClick=(sourceAudio)=>{
          const audio =new Audio(sourceAudio)
          audio.play();
        }
        return (
          <div>
            <AudioIcon >
              {audio}
            </AudioIcon>
          </div>
        )
      }

  return (
    <>
       <GlobalStyles/>
       
       <FullHeightLayout>
        <Header background={'#728a28'}>
                <CloseButton/>
                <CenterContainer>
                    <SearchBarContainer>
                        <SearchBar
                             type="text"
                             placeholder='...word'
                             onChange={handleChange}
                             name="searchedWord" //numele trebuie sa fie ca cel din state
                             value={searchedWord}
                        />
                        <SearchBarButton onClick={searchInputWord}>
                            <VscSearch/>
                        </SearchBarButton>
                    </SearchBarContainer>
                    {showWordInfo && AudioPlayer()}
                </CenterContainer>
        </Header>
        <AdjustedHeightLayout>
          {showWordInfo && displayWords}
          {!showWordInfo && <HorisontalAlign style={{color: matchedWord==='Please choose another word!' && 'red'}}>{matchedWord}</HorisontalAlign>}
        </AdjustedHeightLayout>
     
       </FullHeightLayout>
        
    </>
  )
}

export default SearchWords