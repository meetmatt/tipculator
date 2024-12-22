import React from "react";
import FriendListItem, {Friend} from "./FriendListItem.tsx";

interface FriendListProps {
  friends: Friend[]
}

const FriendList: React.FC<FriendListProps> = ({friends}) => {
  return <ul>
    {
      friends.map((friend) => (
        <FriendListItem key={friend.id} name={friend.name} image={friend.image} balance={friend.balance}
        />
      ))
    }
  </ul>
}

export default FriendList
