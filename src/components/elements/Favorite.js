import React from 'react'
import styled from 'styled-components'


const Favorite = (props) => {
    const starIcon= props.isFavorite ? "red-heart.png" : 'slim-empty-heart.png';
  return (
    <StarContainer onClick={props.addToFavorite}>
        <StarIcon src={require(`../../media/images/${starIcon}`)}
                  
        />
    </StarContainer>
  )
}

export default Favorite

export const StarContainer=styled.div`
    width:2rem;
    margin-top:-5px;
`
export const StarIcon=styled.img`
    width:100%;
    cursor:pointer;
`
