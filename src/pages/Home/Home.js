import React from 'react'
//import {ThemeProvider} from "styled-components";
import { Column } from '../../components/column';
import { GlobalStyles } from '../../components/globalStyles';
import { CustomizedLayout } from '../../components/styles/styled.layout';
import { Layout } from '../../layouts/FlexBoxLayout';


const Home = () => {
  return (
   // <ThemeProvider>
       <>
         <GlobalStyles/>
         <CustomizedLayout>
            <Column>
                
            </Column>
            
         </CustomizedLayout>
       </>
  //  </ThemeProvider>
  )
}

export default Home