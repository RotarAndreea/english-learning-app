import styled from "styled-components"

export const Flex = styled.div`
    display:flex;
    flex-direction: column;

    @media(min-width:768px){
        flex-direction: row;
    }
`
export const ColumnFlex = styled.div`
    display:flex;
    flex-direction: column;
    
`
export const RowFlex = styled.div`
    display:flex;    
`