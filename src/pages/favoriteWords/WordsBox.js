import React from 'react'
import { ColumnFlex} from '../../components/display/flex'
import { TrashIcon } from '../../components/elements/images'
import {HalfButton } from '../../components/styles/styled.button'
import { FooterContainer, SelectedContainer, WordsContainer } from '../../components/styles/styled.container'
import { HeaderText } from '../../components/styles/styles.text'
import Trash from '../../media/images/trash.png'

const WordsBox = ({title, category,background}) => {
    const words=JSON.parse(localStorage.getItem(`${category}`)) || []
    const [deleteWords,setDeleteWords]=React.useState(() => JSON.parse(localStorage.getItem(`${category}`)) || [])
    const [favoriteWords, setFavoriteWords]=React.useState(words.filter(word => word.isFavorite === true))
    const word=favoriteWords.map(word =>(
      <Word
        key={word.id}
        id={word.id}
        word={word.value}
        isFavorite={word.isFavorite}
        deleteFromFavorite={deleteFromFavorite}
      />
    ) )

    function deleteFromFavorite(wordId){ 
      setFavoriteWords(prevValue=>prevValue.map(wordData =>{
        return wordData.id === wordId ?
        {
          ...wordData,
          isFavorite:false
        }
        : {...wordData  }}))
      setDeleteWords(prevValue=>prevValue.map(wordData =>{
        return wordData.id === wordId ?
        {
          ...wordData,
          isFavorite: false
        }
        : {...wordData  }}))
    }

    function saveOptions(words){
      localStorage.setItem(`${category}`, JSON.stringify(words))
      window.location.reload(false);
    }
   
  return (
    <WordsContainer align={'center'} background={background}>
        <ColumnFlex>
          <HeaderText>
            {title}
          </HeaderText>
        </ColumnFlex>
        <ColumnFlex>   
          {word}
        </ColumnFlex>
        <FooterContainer>
            <HalfButton onClick={()=>saveOptions(words)}>Cancel</HalfButton>
            <HalfButton onClick={()=>saveOptions(deleteWords)}>Save Changes</HalfButton>
        </FooterContainer>
        
    </WordsContainer>
  )
}
export default WordsBox

const Word = (props) => {
  return (
      <SelectedContainer background={props.isFavorite ? '' : 'red'}>
          {props.word}
          <TrashIcon src={Trash} onClick={() => props.deleteFromFavorite(props.id)} />
      </SelectedContainer> 
  )
}
