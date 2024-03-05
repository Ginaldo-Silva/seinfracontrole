import React, { ChangeEvent } from "react";
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
    name: string;
    aditionalStyles?: string;
    placeholder: string;
    type: string;
    required: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const StyledFormInput: React.FC<InputProps> = ({ name, aditionalStyles, placeholder, type, required, onChange }) => {
    return (
        <>
            <StyledInput className={aditionalStyles} name={name} placeholder={placeholder} type={type} required={required} onChange={onchange} />
        </>
    )
}