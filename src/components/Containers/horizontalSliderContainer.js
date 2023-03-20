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