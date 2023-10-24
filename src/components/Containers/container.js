import styled from 'styled-components';

export const Container =styled.div`
    display:flex; 
    flex-direction: column; 
    justify-content: ${({centerJustify}) =>
                     centerJustify ? 'center': 'flex-start'};
    align-items: ${(props) =>props.align }; 
    
`
export const ResponsiveContainer =styled.div`
    display:flex; 
    width: ${prop => prop.width}%;
    flex-direction: column; 
    justify-content: ${(props) =>props.jusify };
    align-items: ${(props) =>props.align }; 
    margin:0 0.5rem;
    padding:${props => props.paddingTop}rem 0;
`
export const RowContainer=styled.div`
    display:flex;
`
export const CenterContainer=styled.div`
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
`
export const FooterButtonsContainer=styled.div`
    display:flex;
    width:50%;
    height:3rem;
    justify-content: space-around;
    align-items:center;
    margin: auto;
    margin-top:1.5rem;

    @media(max-width:768px){
        width:80%;
        height:2rem;
`
export const SelectContainer=styled.div`
    display:flex;
    width:100%;

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`

export const FitContentContainer=styled.div`
    padding:8px;
    overflow:auto;
    -webkit-overflow-scrolling: touch;
    border-radius:inherit;
`
