import styled from "styled-components";

export const HorizontalContainer=styled.div`        
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;  
  margin: 1rem 0;
 -webkit-overflow-scrolling: touch;

 &::-webkit-scrollbar {
    display: none;
  }
`
/*
export const Column=({
  children,
  className, 
  centerAlign,
  centerJustify
}) => (
  <Container
      className={className}
      centerAlign={centerAlign}
      centerJustify={centerJustify}
  >
      {children}
  </Container>
)
*/