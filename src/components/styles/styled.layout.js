import styled from "styled-components";
import { ContainerLayout } from "../../layouts/ContainerLayout";
import { ResponsiveContainer } from "../Containers/container";

export const PrincipalLayout=styled(ContainerLayout)`
    background:#d0ca95;
    border-radius:20px;
    padding:1.5rem;
    transition: all 0.50s linear;
    margin-top: -30px;
    width:100%;
 
`
export const RespContainer=styled(ResponsiveContainer)`
    justify-content:space-around;
    
    @media(min-width:768px){
        flex-direction: row; 
`
