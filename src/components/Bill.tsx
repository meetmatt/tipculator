import React from "react";

export default function Bill({children, value, onChange}: {
  children: React.ReactNode,
  value: number,
  onChange: React.ChangeEventHandler
}) {
  return <div>
    <label htmlFor="total">{children}</label>
    <input id="total" name="total" type="number" min="0" step="1" value={value} onChange={onChange}/>
  </div>
}
