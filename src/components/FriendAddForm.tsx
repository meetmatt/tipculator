import React, {useState} from "react";
import TextInput from "./TextInput.tsx";
import Button from "./Button.tsx";

interface AddFriendProps {
  onAddFriend: (_id: number, _name: string, _image: string) => void
}

const FriendAddForm: React.FC<AddFriendProps> = ({onAddFriend}) => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [id, setId] = useState<number>(0)
  const [name, setName] = useState<string>("")
  const [image, setImage] = useState<string>("")

  function handleOnFormToggleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (isFormOpen) {
      setIsFormOpen(false)
    } else {
      setName("")
      setId(Math.floor(Math.random() * 100000))
      setImage(`https://i.pravatar.cc/48?u=${id}`)
      setIsFormOpen(true)
    }
  }

  function submitForm(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsFormOpen(false)
    onAddFriend(id, name, image)
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
