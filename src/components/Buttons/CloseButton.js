import styled from "styled-components";
import React, { Children } from 'react';
import { useNavigate } from "react-router";

const CloseButton = () => {
    const navigate = useNavigate();
    const navigateToHome = ()=> {
        navigate('/');
    };

  return (
    <CloseButtonStyles onClick={navigateToHome}>
        X
    </CloseButtonStyles>
  )
}
export default CloseButton

export const CloseButtonStyles=styled.button`
    width:30px;
    height:30px;
    border-radius:20px;
    border:2px solid black;
    cursor:pointer;
    font-weight:bold;

    &:hover{
        background:#f20d0d;
    }
`