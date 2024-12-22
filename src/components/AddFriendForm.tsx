import React, {useState} from "react";
import TextInput from "./TextInput.tsx";
import Button from "./Button.tsx";

interface AddFriendProps {
  onAddFriend: (_id: number, _name: string, _image: string) => void
}

const AddFriendForm: React.FC<AddFriendProps> = ({onAddFriend}) => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [id, setId] = useState(0)
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

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

  function handleOnFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function handleOnFormOpen(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    initializeForm()
    openForm()
  }

  function handleOnFormClose(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    closeForm()
  }

  function handleOnSubmitButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    onAddFriend(id, name, image)
    closeForm()
  }

  function handleOnNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleOnImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setImage(event.target.value)
  }

  return isFormOpen
    ? <>
      <form className="form-add-friend"
            onSubmit={handleOnFormSubmit}>
        <TextInput value={name} onChange={handleOnNameChange}>👯‍♀️Friend name</TextInput>
        <TextInput value={image} onChange={handleOnImageChange}>🌄️Image URL</TextInput>
        <Button onClick={handleOnSubmitButtonClick}>Add</Button>
      </form>
      <Button onClick={handleOnFormClose}>Close</Button>
    </>
    : <Button onClick={handleOnFormOpen}>Add friend</Button>
}

export default AddFriendForm
