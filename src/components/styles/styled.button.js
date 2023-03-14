import styled from "styled-components";
import { GeneralButton } from "../Buttons/Button";

export const Button=styled(GeneralButton)`
    margin-bottom:2rem;
    background: ${props => props.background};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    width: 70%;
    max-width: 700px; 
`
export const NewThingsButton=styled(GeneralButton)`
    background: black;
    color:white;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    width: 40px;
    position: absolute;
    right: -15px;
    border-radius:50%;
    box-shadow: 3px 3px 12px black
`
export const RemoveButton=styled.button`
    width:30px;
    height:30px;
    border-radius:20px;
    border:1px dashed black;
    cursor:pointer;
    font-weight:bold;
    background:#d0ca95;

    position:absolute;
    left:8px;
    bottom:8px;

    &:hover{
        background:#f20d0d;
    }
`
