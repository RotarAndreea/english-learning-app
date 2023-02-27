import { Container } from "./Containers/container";

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