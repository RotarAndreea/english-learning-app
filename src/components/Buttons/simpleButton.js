import styled from "styled-components";

export const Container=styled.button`
    border: none;
    padding: 0.9rem;
    border-radius:20px;
    font-weight: bold;

    &:hover {
        cursor:pointer;
        opacity: 0.7;
    }

    &:active{
        font-weight:bold;
        outline-style: solid;
        outline-color: #d9d4a6;
        opacity:1;
    }
    `

    export const Button =({children, className,onClick, disabled})=>
    (
        <Container
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
                {children}
        </Container>
    )