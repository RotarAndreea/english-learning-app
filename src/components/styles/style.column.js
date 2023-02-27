import styled from "styled-components";
import { Column } from "../column";

export const LessonsColumn=styled(Column)`
    background:#c9c283;
    border-radius:20px;
    height: 230px;
    width: 40%;
    padding: 0 0.5rem;
    transition: all 0.50s linear;
    flex: 0 0 auto;
    position:relative;
    margin-right: 1.5rem;
    cursor:pointer;

    @media(max-width:768px){
      width:60%;
`