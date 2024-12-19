import React, {useState} from "react"
import Summary from "./Summary.tsx";
import Reset from "./Reset.tsx";
import Bill from "./Bill.tsx";
import TipSelect from "./TipSelect.tsx";

export default function TipCalculator() {
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
