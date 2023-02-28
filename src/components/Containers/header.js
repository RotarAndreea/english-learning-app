import styled from 'styled-components';

export const HeaderContainer =styled.div`
    display:flex;
    background: ${props => props.background};
    width:70%;
    height:120px;
    margin:auto;
    border-radius:20px;
    padding:0.5rem;
    transition: all 0.50s linear;

    @media(max-width:768px){
        width:100%;
    
`