import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    border-radius: 4px;
    border: none;
    background-color: #ededed;
    color: #242424;
    min-width: 100px;
    min-height: 40px;
    padding: 4px 6px;
    outline: none;
    border: none;
    line-height: 1.15;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    &:focus {
        border-bottom: 3px solid var(--color-primary);
        border-radius: 4px 4px 2px 2px;
    }

    &:hover {
        outline: 1px solid lightgrey;
    }
`

interface InputProps {
    aditionalStyles?: string;
    placeholder: string;
}

export const StyledFormInput: React.FC<InputProps> = ({ aditionalStyles, placeholder }) => {
    return (
        <>
            <StyledInput className={aditionalStyles} placeholder={placeholder} />
        </>
    )
}