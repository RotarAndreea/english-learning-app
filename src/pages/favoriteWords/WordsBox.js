import React from 'react'
import { ColumnFlex} from '../../components/display/flex'
import { TrashIcon } from '../../components/elements/images'
import {HalfButton } from '../../components/styles/styled.button'
import { FooterContainer, SelectedContainer, WordsContainer } from '../../components/styles/styled.container'
import { HeaderText } from '../../components/styles/styles.text'
import Trash from '../../media/images/trash.png'

const WordsBox = ({title, category,background}) => {
    const words=JSON.parse(localStorage.getItem(`favorite${category}`)) || []
    const [favoriteWords, setFavoriteWords]=React.useState([...words])
    const word=favoriteWords.map(word =>(
      <Word
        key={word.word}
        word={word.word}
        deleteFromFavorite={()=>deleteFromFavorite(word.word)}
      />
    ) )

    function deleteFromFavorite(word){ 
      setFavoriteWords(prevValue=>prevValue.filter(wordData =>
         wordData.word !== word ))
        const arrayAfterDeleting=favoriteWords.filter(wordData =>
          wordData.word !== word );
      localStorage.setItem(`favorite${category}`,JSON.stringify(arrayAfterDeleting))   
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
            <HalfButton >Cancel</HalfButton>
            <HalfButton >Save Changes</HalfButton>
        </FooterContainer>
        
    </WordsContainer>
  )
}
export default WordsBox

const Word = (props) => {
  return (
      <SelectedContainer >
          {props.word}
          <TrashIcon src={Trash} onClick={() => props.deleteFromFavorite(props.word)} />
      </SelectedContainer> 
  )
}
