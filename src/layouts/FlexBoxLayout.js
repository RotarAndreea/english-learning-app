import React from "react"
import { Flex } from "../components/display/flex"
import { Container } from "../components/Containers/container"

export const Layout = ({children,className}) =>(
    <Container className={className}>
        <Flex>
            {children}
        </Flex>
    </Container>
)