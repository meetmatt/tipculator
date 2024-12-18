import React from "react";

export default function TipSelect({id, children, value, onChange}: {
  id: string,
  children: React.ReactNode,
  value: number,
  onChange: React.ChangeEventHandler
}) {
  return <div>
    <label htmlFor={id}>{children}</label>
    <select id={id} name={id} value={value} onChange={onChange}>
      <option value="0">Dissatisfied (0%)</option>
      <option value="5">It was okay (5%)</option>
      <option value="10">It was good (10%)</option>
      <option value="20">Absolutely amazing! (20%)</option>
    </select>
  </div>
}
