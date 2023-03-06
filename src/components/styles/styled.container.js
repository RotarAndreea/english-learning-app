import styled from "styled-components";
import { Container, RowContainer } from "../Containers/container";

export const TextContainer=styled(Container)`
    border:2px solid #0d0c0c;
    border-radius:30px;
    width:70%;
    max-width:700px;
    height:200px;
    background: ${props => props.background};
    margin:auto;
    margin-bottom:2rem;
    font-size:${props => props.textSize}rem;
    `
export const UpperContainer=styled(RowContainer)`
    height:80%;
    //margin:auto;
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
