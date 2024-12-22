import React, {useState} from "react";
import TextInput from "./TextInput.tsx";
import Button from "./Button.tsx";
import Friend from "../types/Friend";

interface AddFriendProps {
  onAddFriend: (_friend: Friend) => void
}

const FriendAddForm: React.FC<AddFriendProps> = ({onAddFriend}) => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [name, setName] = useState<string>("")
  const [image, setImage] = useState<string>("https://i.pravatar.cc/48")

  function handleOnFormToggleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (isFormOpen) {
      setIsFormOpen(false)
    } else {
      setName("")
      setIsFormOpen(true)
    }
  }

  function submitForm(event: React.SyntheticEvent) {
    event.preventDefault()
    const id = Math.floor(Math.random() * 100000)
    const newFriend: Friend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0
    }
    onAddFriend(newFriend)
    setIsFormOpen(false)
  }

  function handleOnFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    submitForm(event)
  }

  function handleOnSubmitButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    submitForm(event)
  }

  function handleOnNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleOnImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setImage(event.target.value)
  }

  return <>
    {
      isFormOpen &&
      <form className="form-add-friend" onSubmit={handleOnFormSubmit}>
        <TextInput value={name} onChange={handleOnNameChange} autofocus={true}>👯‍♀️Friend name</TextInput>
        <TextInput value={image} onChange={handleOnImageChange}>🌄️Image URL</TextInput>
        <Button onClick={handleOnSubmitButtonClick}>Add</Button>
      </form>
    }
    <Button onClick={handleOnFormToggleClick}>{isFormOpen ? 'Close' : 'Add friend'}</Button>
  </>
}

export default FriendAddForm
