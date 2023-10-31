import styled from "styled-components";
import { PrincipalLayout } from "../../components/styles/styled.layout";

export const FullHeightLayout=styled(PrincipalLayout)`
    min-height: 100vh;
    padding:0;
    margin:0;

`
export const SearchBarContainer=styled.div`
    width:60%;
    border-radius:10px;
    height:30px;
    display:flex;

`
export const SearchBar=styled.input`
    width:100%;
    height:100%;
    background:white;
    border: 1px solid rgba(0,0,0,0.8);
    border-radius:inherit;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

`
export const SearchBarButton=styled.div`
    width:30px;
    background:rgba(0,0,0,0.8);
    border-radius:inherit;
    height:100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`

export const WordContainer=styled.div`
    margin:10px;
`
export const DefinitionsContainer=styled.div`
    margin:0 10px;
`