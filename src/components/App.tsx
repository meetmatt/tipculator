import {useState} from "react"

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
]


function Friend({name, image, balance}: { name: string, image: string, balance: number }) {
  return <li>
    <img src={image} alt={name}/>
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

function AddFriendForm({addFriend}: { addFriend({id: number, name: string, image: string}): void }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [id, setId] = useState(0)
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  function handleOpen(e) {
    e.preventDefault()
    setIsFormOpen(true)
    setName("")
    setId(Math.floor(Math.random() * 100000))
    setImage(`https://i.pravatar.cc/48?u=${id}`)
  }

  function handleClose(e) {
    e.preventDefault()
    setIsFormOpen(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    addFriend(id, name, image)
    setIsFormOpen(false)
  }

  return isFormOpen
    ? <>
      <form className="form-add-friend" onSubmit={(e) => e.preventDefault()}>
        <label>👯‍♀️Friend name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <label>🌄️Image URL</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
        <button className="button" onClick={handleSubmit}>Add</button>
      </form>
      <button className="button" onClick={handleClose}>Close</button>
    </>
    : <button className="button" onClick={handleOpen}>Add friend</button>
}

function FriendList({friends, addFriend}: {
  friends: [{ name: string, id: number, image: string, balance: number }],
  addFriend({id: number, name: string, image: string}): void
}) {
  return <div className="sidebar">
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} name={friend.name} image={friend.image} balance={friend.balance}/>
      ))}
    </ul>
    <AddFriendForm addFriend={addFriend}/>
  </div>
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends.slice())

  function onAddFriend(id: number, name: string, image: string) {
    setFriends((friends) =>
      [...friends, {
        id: id,
        name: name,
        image: image,
        balance: 0,
      }]
    )
  }

  return <div className="app">
    <FriendList friends={friends} addFriend={onAddFriend}/>
  </div>
}
