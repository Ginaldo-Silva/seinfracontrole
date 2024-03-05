import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    border-radius: 6px;
    border: 1px solid #cccc;
    min-width: 100px;
    min-height: 30px;
    padding: 0px 4px;
`

interface InputProps {
    aditionalStyles?: string;
}

export const StyledFormInput: React.FC<InputProps> = ({ aditionalStyles }) => {
    return (
        <>
            <StyledInput className={aditionalStyles} />
        </>
    )
}