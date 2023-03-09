import styled from "styled-components";

export const EmptyLine=styled.div`
    width:100%;
    height:14px;
    background: #c9c283;
    border-radius:20px;
    margin-top:1px;
    border:2px dotted black;
`

export const ProgressLine=styled.div`
    width: ${prop => prop.progressValue+2}%;    
    height: 14px;
    background:${props =>props.background};
    border-radius:20px;
    transition: all 0.50s linear;
    border:2px solid black;
    margin: -2px -2px;
`
export const ProgressValue=styled.p`
    font-size:12px;
    padding:0 1rem;
    font-weight:bold;
`
