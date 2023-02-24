import { ContainerForColumn } from "./Containers/container";

export const Column=({
    children,
    className,
    centerAlign,
    centerJustify
}) => (
    <ContainerForColumn
        className={className}
        centerAlign={centerAlign}
        centerJustify={centerJustify}
    >
        {children}
    </ContainerForColumn>
)