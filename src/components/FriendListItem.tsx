import React from "react";
import Button from "./Button.tsx";
import Friend from "../types/Friend";

interface FriendProps {
  friend: Friend
}

const FriendListItem: React.FC<FriendProps> = ({friend: {balance, image, name}}) => {

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
    <Button onClick={(event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault()}>
      Select
    </Button>
  </li>
}

export default FriendListItem
