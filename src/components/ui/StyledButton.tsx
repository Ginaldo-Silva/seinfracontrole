import React from "react";
import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    background-color: transparent;
    text-align: center;
    letter-spacing: 1px;
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
    type?: "button" | "submit" | "reset"; 
    onClick?: () => void;
}

export const StyledButton: React.FC<ButtonProps> = ({ primary, children, aditionalstyle, type, onClick }) => {
    const StyledComponent = primary ? PrimaryButton : Button;

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            console.error("Invalid onClick type. Expected a function.");
        }
    };

    return (
        <StyledComponent className={aditionalstyle} type={type} onClick={handleClick}>
            {children}
        </StyledComponent>
    )
}