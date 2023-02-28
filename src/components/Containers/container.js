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
`
