import React from "react"
import { HeaderContainer } from "../components/Containers/header"

export const Header = ({children,className, background}) =>(
    <HeaderContainer className={className} background={background}>
            {children}
     </HeaderContainer>
    
)