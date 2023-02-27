import styled from 'styled-components';

export const Container =styled.div`
    display:flex;
    flex-direction: column;
    justify-content: ${({centerJustify}) =>
                     centerJustify ? 'center': 'flex-start'};
    align-items: ${(props) =>props.align };
    
`