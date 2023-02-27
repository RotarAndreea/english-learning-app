import styled from "styled-components";

export const CircleProgress=styled.div`
    width: 60px;
    height:60px;
    border-radius: 50%;
    background: green;
    position:relative;
    display:grid;
    place-items:center;
    margin:0.4rem;
    background: conic-gradient(    
        ${prop=> prop.color} ${prop=>prop.progressValue*3.6}deg,      
        #d9d4a6 ${prop=>prop.progressValue*3.6}deg      
        );

    &:before{
        content:"";
        position:absolute;
        height:84%;
        width:84%;
        background-color:#d0ca95;
        border-radius:50%;
    }
`
export const ValueContainer=styled.div`
    position:relative;
    font-size:1rem;
`