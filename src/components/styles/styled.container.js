import styled from "styled-components";
import { Container, RowContainer, SelectContainer } from "../Containers/container";

export const TextContainer=styled(Container)`
    border:2px solid #0d0c0c;
    border-radius:30px;
    width:70%;
    max-width:700px;
    margin:auto;
    height:200px;
    background: ${props => props.background};
    margin-bottom:2rem;
    font-size:${props => props.textSize}rem;
    `
export const UpperContainer=styled(RowContainer)`
    height:80%;
`

export const FooterTextContainer=styled(RowContainer)`
    background:#f1eff6;
    //background:#d9d4a6;
    height:20%;
    border-top:2px solid #0d0c0c;
    border-bottom-left-radius:30px;
    border-bottom-right-radius:30px;
    padding:20px;
    justify-content:space-between;
    align-items:center;
    
`
export const WordsContainer=styled(Container)`
//border:2px solid #0d0c0c;
    box-shadow: 1px 1px 18px #545445;
    border-radius:30px;
    width:30%;
    max-width:700px;
    min-height:200px;
    background: ${props => props.background};
    margin-bottom:2rem;  

    @media(max-width:768px){
        width:80%;
        margin:1rem auto;
        
    `

export const SelectedContainer=styled(SelectContainer)`
    color:white;
    text-shadow: 2px 2px 8px black;
    justify-content:space-between;
    background:${props => props.background};
`