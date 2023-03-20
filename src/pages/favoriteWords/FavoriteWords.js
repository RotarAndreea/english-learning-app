import React from 'react'
import CloseButton from '../../components/Buttons/CloseButton'
import { GlobalStyles } from '../../components/globalStyles'
import { PrincipalLayout, RespContainer } from '../../components/styles/styled.layout'
import { Header } from '../../layouts/Header'
import WordsBox from './WordsBox'

const FavoriteWords = () => {
  return (
    <>
       <GlobalStyles/>
       <Header background={'#728a28'}>
            <CloseButton/>
       </Header>
       <PrincipalLayout>
        <RespContainer >
            <WordsBox title={'Saved Nouns'} category={'nouns'} background={'#d7d742'}/>
            <WordsBox title={'Saved Expressions'} background={'#dbba57'}/>
            <WordsBox title={'Saved Verbs'} background={'#db9957'}/>

        </RespContainer>
       </PrincipalLayout>

    </>
  )
}

export default FavoriteWords