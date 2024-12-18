export default function Summary({bill, tip}: { bill: number, tip: number }) {
  const sum = Number(bill) + Number(tip)
  return <h1>You pay ${sum} (${bill} + ${tip} tip)</h1>
}
