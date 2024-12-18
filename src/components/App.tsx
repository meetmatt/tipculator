const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    balance: 0,
  },
];


function Friend({name, id, balance}: { name: string, id: number, balance: number }) {
  const src = `https://i.pravatar.cc/48?u=${id}`
  return <li>
    <img src={src} alt={name}/>
    <h3>{name}</h3>
    {
      balance != 0
        ? <p className={balance < 0 ? 'red' : 'green'}>
          {balance < 0 ? `You owe ${name} ${balance * -1}€` : `${name} owes you ${balance}€`}
        </p>
        : <p>You and {name} are even</p>
    }
    <button className="button">Select</button>
  </li>
}

function FriendList({friends}) {
  return <div className="sidebar">
    <ul>
      {initialFriends.map((friend) => (
        <Friend key={friend.id} id={friend.id} name={friend.name} image={friend.image} balance={friend.balance}/>
      ))}
    </ul>
    <button className="button">Add friend</button>
  </div>
}

export default function App() {
  return <div className="app">
    <FriendList friends={initialFriends}/>
  </div>
}
