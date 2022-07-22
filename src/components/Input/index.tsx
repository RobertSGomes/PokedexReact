import React from "react";
import { InputWrapper } from "./style";

interface Props {
    value: any,
    placeholder: string,
    type: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    onClick: React.MouseEventHandler<HTMLInputElement>,
    onKeyPress: React.KeyboardEventHandler<HTMLInputElement>,
    onBlur: React.FocusEventHandler<HTMLInputElement>
}

export const Input: React.FC<Props> = ({ value, placeholder, type, onChange, onClick, onKeyPress, onBlur }) => {
    return (
        <InputWrapper value={value} placeholder={placeholder} type={type} onChange={onChange} onClick={onClick} onKeyPress={onKeyPress} onBlur={onBlur} />
    )
}