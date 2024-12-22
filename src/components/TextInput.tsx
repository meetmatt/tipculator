import React from "react";

interface TextInputProps {
  children: React.ReactNode,
  value: string;
  onChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({children, value, onChange}) => {
  return <>
    <label>{children}</label>
    <input type="text" value={value} onChange={onChange}/>
  </>
}

export default TextInput
