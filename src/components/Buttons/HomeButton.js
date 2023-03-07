import React from 'react'
import { useNavigate } from "react-router";
import styled from 'styled-components';
import {Button} from '../styles/styled.button'


export const HomeButton =({background, text, width})=>
{
    const navigate = useNavigate();
    const navigateToHome = ()=> {
        navigate('/');
    };
  return (
    <StyledHomeButton 
            onClick={navigateToHome} 
            background={background}
            width={width}
    >
        {text}
    </StyledHomeButton>
  )
}

export const StyledHomeButton = styled.button`
border: none;
padding: 0.9rem;
border-radius:20px;
font-weight: bold;
margin-bottom:1rem;
background: ${props => props.background};
font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
width:70%;
width: ${prop => prop.width}%;
max-width: 700px; 

&:hover {
    cursor:pointer;
    opacity: 0.7;
}

&:active{
    font-weight:bold;
    outline-style: solid;
    outline-color: #d9d4a6;
    opacity:1;
}
`
