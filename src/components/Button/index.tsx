import React from "react";
import { ButtonWrapper } from "./style";

interface Props {
    text: string;
    onClick: () => void
}

export const Button: React.FC<Props> = ({ text, onClick }) => {
    return (
        <ButtonWrapper
            onClick={onClick}
        >
            {text}
        </ButtonWrapper>
    )
}