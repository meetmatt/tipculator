import React from "react";

export default function Reset({onClick}: { onClick: React.EventHandler<React.MouseEvent<HTMLInputElement>> }) {
  return <input type="reset" value="Reset" onClick={onClick}/>
}
