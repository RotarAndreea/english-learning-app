import React from 'react'
import styled from 'styled-components'

const Expression = ({term,explanation,example}) => {
  return (
    <Container>
      <Term>{term}</Term>
      <CategoryText>Explanation</CategoryText>
      <Explanation>{explanation}</Explanation>
      <CategoryText>Example</CategoryText>
      <Example>{example}</Example>
    </Container>
  )
}

export default Expression

export const Container=styled.div`
  width:80%;
  margin:auto;
  margin-bottom:2rem;
  width:70%;
  max-width:700px;
  padding:2rem;
  border:3px solid black;
  border-radius:20px;
`
export const CategoryText=styled.div`
  font-size: 1.3rem;
  margin:0.5rem 0;
  background:#db5b57;
  width:7rem;
  border-radius:20px;
  @media(max-width:768px){
    font-size:1.1rem;
`

export const Term=styled.h1`
  font-weight:bold;
  font-size:1.8rem;
  margin-bottom:1rem;

  @media(max-width:768px){
    font-size:1.2rem;

`
export const Explanation=styled.p`
  margin-bottom:1rem;
  font-size:1.3rem;
  @media(max-width:768px){
    font-size:1rem;
`
export const Example=styled.p`
  font-size:1rem;
`