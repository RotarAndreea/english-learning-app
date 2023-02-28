import { Container } from "./Containers/container";

export const Column=({
    children,
    className, 
    centerAlign,
    centerJustify,
    onClick
}) => (
    <Container
        className={className}
        centerAlign={centerAlign}
        centerJustify={centerJustify}
        onClick={onClick}
    >
        {children}
    </Container>
)