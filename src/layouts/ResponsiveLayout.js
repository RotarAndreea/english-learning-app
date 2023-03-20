import React from "react"
import { Container, ResponsiveContainer } from "../components/Containers/container"
import { Flex } from "../components/display/flex"

export const Layout = ({children,className}) =>(
    <ResponsiveContainer className={className}>
        <Flex>
            {children}
        </Flex>
    </ResponsiveContainer>
)