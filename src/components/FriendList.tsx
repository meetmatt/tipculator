import React from "react";
import FriendListItem from "./FriendListItem.tsx";
import Friend from "../types/Friend";

interface FriendListProps {
  friends: Friend[]
}

const FriendList: React.FC<FriendListProps> = ({friends}) => {
  return <ul>
    {
      friends.map((friend: Friend) => (
        <FriendListItem key={friend.id} friend={friend}/>
      ))
    }
  </ul>
}

export default FriendList
