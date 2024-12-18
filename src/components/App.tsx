import React, {useState} from "react"

function Bill({children, value, onChange}: { children: React.ReactNode, value: number, onChange: React.ChangeEventHandler }) {
  return <div>
    <label htmlFor="total">{children}</label>
    <input id="total" name="total" type="number" min="0" step="1" value={value} onChange={onChange}/>
  </div>
}

function TipSelect({id, children, value, onChange}: {
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

function Summary({bill, tip}: { bill: number, tip: number }) {
  const sum = Number(bill) + Number(tip)
  return <h1>You pay ${sum} (${bill} + ${tip} tip)</h1>
}

function Reset({onClick}: { onClick: React.EventHandler<React.MouseEvent<HTMLInputElement>> }) {
  return <input type="reset" value="Reset" onClick={onClick}/>
}

export default function App() {
  const [bill, setBill] = useState<number>(0)
  const [ownLike, setOwnLike] = useState<number>(0)
  const [friendLike, setFriendLike] = useState<number>(0)
  const tip = Number((bill * (ownLike + friendLike) / 200).toFixed(2))

  function handleBillOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBill(Number(e.target.value))
  }

  function handleOwnLikeOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setOwnLike(Number(e.target.value))
  }

  function handleFriendLikeOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFriendLike(Number(e.target.value))
  }

  function handleOnReset() {
    setBill(0)
    setOwnLike(0)
    setFriendLike(0)
  }

  return <form onSubmit={(e) => e.preventDefault()}>
    <Bill value={bill} onChange={handleBillOnChange}>How much was the bill?</Bill>
    <TipSelect id="ownLike" value={ownLike} onChange={handleOwnLikeOnChange}>
      How did you like the service?
    </TipSelect>
    <TipSelect id="friendLike" value={friendLike} onChange={handleFriendLikeOnChange}>
      How did your friend like the service?
    </TipSelect>
    <Summary bill={bill} tip={tip}/>
    <Reset onClick={handleOnReset}/>
  </form>
}
