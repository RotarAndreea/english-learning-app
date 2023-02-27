import React from "react"
import { Container } from "../components/Containers/container"
import { ColumnFlex } from "../components/display/flex"

export const ContainerLayout = ({children,className}) =>(
    <Container className={className}>
        <ColumnFlex>
            {children}
        </ColumnFlex>
    </Container>
)