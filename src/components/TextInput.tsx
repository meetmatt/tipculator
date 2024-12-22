import React from "react";

interface TextInputProps {
  children: React.ReactNode,
  value: string;
  autofocus?: boolean;
  onChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({children, value, autofocus, onChange}) => {
  return <>
    <label>{children}</label>
    <input type="text"
           autoFocus={autofocus}
           value={value}
           onChange={onChange}/>
  </>
}

export default TextInput
