import React from "react"
import { Container } from "../components/Containers/container"
import { Flex } from "../components/display/flex"

export const Layout = ({children,className}) =>(
    <Container className={className}>
        <Flex>
            {children}
        </Flex>
    </Container>
)