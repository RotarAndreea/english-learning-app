import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:center;
    padding-top: 5rem;
`

export const ContainerForColumn =styled.div`
    display:flex;
    flex-direction: column;
    align-items: ${({centerAlign}) =>
                     centerAlign ? 'center': 'flex-start'};
    justify-content: ${({centerJustify}) =>
                     centerJustify ? 'center': 'flex-start'};

`