import React from "react";

interface TextInputProps {
  children: React.ReactNode,
  value: string;
  onChange(event: ChangeEvent<HTMLInputElement>);
}

export default function TextInput({children, value, onChange}: TextInputProps) {
  return <>
    <label>{children}</label>
    <input type="text" value={value} onChange={onChange}/>
  </>
}
