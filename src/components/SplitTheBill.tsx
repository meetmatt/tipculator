import React, {useState} from "react";
import Friend from "../types/Friend";
import FriendList from "./FriendList.tsx";
import FriendAddForm from "./FriendAddForm.tsx";

const initialFriends: Friend[] = [
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

const SplitTheBill: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>(initialFriends.slice())

  function handleOnAddFriend(friend: Friend): void {
    setFriends((friends: Friend[]) => {
        return [...friends, friend]
      }
    )
  }

  return <div className="app">
    <div className="sidebar">
      <FriendList friends={friends}/>
      <FriendAddForm onAddFriend={handleOnAddFriend}/>
    </div>
  </div>
}

export default SplitTheBill
