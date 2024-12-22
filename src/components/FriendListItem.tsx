import React from "react";
import Button from "./Button.tsx";

export interface Friend {
  id?: number;
  name: string;
  image: string;
  balance: number;
}

const FriendListItem: React.FC<Friend> = ({name, image, balance}) => {
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
