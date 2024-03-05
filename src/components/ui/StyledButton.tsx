import React from "react";
import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 1px solid  #cccc;
    padding: 8px;
    border-radius: 75px;
    font-size: 1em;
    color: black;
`

const PrimaryButton = styled(Button)`
    background-color: var(--color-primary);
    border: none;
`

interface ButtonProps {
    primary: boolean;
    aditionalstyle?: string;
}

export const StyledButton: React.FC<ButtonProps> = ({ primary, children, aditionalstyle }) => {
    const StyledComponent = primary ? PrimaryButton : Button;

    return (
        <>
            <StyledComponent className={aditionalstyle}>
                {children}
            </StyledComponent>
        </>
    )
}