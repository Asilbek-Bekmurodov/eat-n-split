import Friend from "./Friend";

export default function FriendsList({ friends, onSelection, selected }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          onSelection={onSelection}
          key={friend.id}
          selected={selected}
          friend={friend}
        />
      ))}
    </ul>
  );
}
