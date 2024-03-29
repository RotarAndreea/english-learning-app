import styled from "styled-components";
import { GeneralButton } from "../Buttons/Button";

export const Button=styled(GeneralButton)`
    margin-bottom:2rem;
    background: ${props => props.background};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    width: 70%;
    max-width: 700px; 
    color:black;
`
export const NewThingsButton=styled(GeneralButton)`
    background: black;
    color:white;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    width: 45px;
    position: absolute;
    right: -15px;
    border-radius:50%;
    box-shadow: 3px 3px 12px black;
    display:flex;
    justify-content:center;
`
export const RemoveButton=styled.button`
    width:30px;
    height:30px;
    border-radius:20px;
    border:1px dashed black;
    cursor:pointer;
    font-weight:bold;
    background:#d0ca95;
    color:black;    
    position:absolute;
    left:8px;
    bottom:8px;
    display:flex;
    justify-content:center;
    align-items:center;

    &:hover{
        background:#f20d0d;
    }
`
export const HalfButton=styled(GeneralButton)`
    width:50%;
`
