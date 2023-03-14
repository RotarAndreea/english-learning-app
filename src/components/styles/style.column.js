import styled from "styled-components";
import { Column } from "../column";

export const LessonsBox=styled(Column)`
    background:#c9c283;
    border-radius:20px;
    height: 270px;
    width: 40%;
    max-width:400px;
    padding: 0 0.5rem;
    transition: all 0.50s linear;
    flex: 0 0 auto;
    position:relative;
    margin-right: 1.7rem;
    cursor:pointer;
    display: ${({choosed}) => (choosed === true ? 'inline' : 'none')};

    &:hover{
      opacity:0.6;
    }

    @media(max-width:768px){
      width:60%;
      `
export const NewLessonsColumn=styled(Column)`
    background:#c9c283;
    border-radius:20px;
    height: 110px;
    width: 70%;
    max-width:500px;
    padding: 0 0.5rem;
    transition: all 0.50s linear;
    flex: 0 0 auto;
    position:relative;
    margin-top: 1rem;
    cursor:pointer;
    

    @media(max-width:768px){
      width:70%;
`

