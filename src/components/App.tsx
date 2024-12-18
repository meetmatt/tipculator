import { ReactNode } from "react";

function Bill({children}: {children: ReactNode}) {
  return <div>
    <label htmlFor="total">{children}</label>
    <input id="total" name="total" type="number" min="1" max="100" step="0.1"/>
  </div>
}

function TipSelect({id, children}: { id: string, children: ReactNode }) {
  return <div>
    <label htmlFor={id}>{children}</label>
    <select id={id} name={id}>
      <option value="0">Dissatisfied (0%)</option>
      <option value="5">It was okay (5%)</option>
      <option value="10">It was good (10%)</option>
      <option value="20">Absolutely amazing! (20%)</option>
    </select>
  </div>
}

function Reset() {
  return <input type="reset" value="Reset"/>
}

export default function App() {
  return <form>
    <Bill>How much was the bill?</Bill>
    <TipSelect id="ownLike">How did you like the service?</TipSelect>
    <TipSelect id="friendLike">How did your friend like the service?</TipSelect>
    <Reset/>
  </form>
}
