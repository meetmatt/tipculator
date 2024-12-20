import React, {useState} from "react"
import Button from "./Button.tsx"
import TextInput from "./TextInput.tsx"

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
    <Button>Select</Button>
  </li>
}

function AddFriendForm({addFriend}: { addFriend({id: number, name: string, image: string}): void }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [id, setId] = useState(0)
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  function handleOpen(e) {
    e.preventDefault()
    initializeForm()
    openForm()
  }

  function initializeForm() {
    setName("")
    setId(Math.floor(Math.random() * 100000))
    setImage(`https://i.pravatar.cc/48?u=${id}`)
  }

  function openForm() {
    setIsFormOpen(true)
  }

  function closeForm() {
    setIsFormOpen(false)
  }

  function handleClose(e) {
    e.preventDefault()
    closeForm()
  }

  function handleSubmit(e) {
    e.preventDefault()
    addFriend(id, name, image)
    closeForm()
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleImageChange(e) {
    setImage(e.target.value)
  }

  return isFormOpen
    ? <>
      <form className="form-add-friend" onSubmit={(e) => e.preventDefault()}>
        <TextInput value={name} onChange={handleNameChange}>👯‍♀️Friend name</TextInput>
        <TextInput value={image} onChange={handleImageChange}>🌄️Image URL</TextInput>
        <Button onClick={handleSubmit}>Add</Button>
      </form>
      <Button onClick={handleClose}>Close</Button>
    </>
    : <Button onClick={handleOpen}>Add friend</Button>
}

function FriendList({friends, onAddFriend}: {
  friends: [{ name: string, id: number, image: string, balance: number }],
  onAddFriend({id: number, name: string, image: string}): void
}) {
  return <div className="sidebar">
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} name={friend.name} image={friend.image} balance={friend.balance}/>
      ))}
    </ul>
    <AddFriendForm addFriend={onAddFriend}/>
  </div>
}

function SplitTheBill() {
  const [friends, setFriends] = useState(initialFriends.slice())

  function handleAddFriend(id: number, name: string, image: string) {
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
    <FriendList friends={friends} onAddFriend={handleAddFriend}/>
  </div>
}

export default function App() {
  return <SplitTheBill/>
}
