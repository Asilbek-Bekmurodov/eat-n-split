import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplit }) {
  const [bill, setBill] = useState("");
  const [userPayed, setUserPayed] = useState("");
  const payedByFriend = bill ? bill - userPayed : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userPayed) return;
    onSplit(whoIsPaying === "user" ? payedByFriend : -userPayed);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={userPayed}
        onChange={(e) =>
          setUserPayed(
            Number(e.target.value) > bill
              ? payedByFriend
              : Number(e.target.value)
          )
        }
      />

      <label>👭 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={payedByFriend} />

      <label>Who is paying the bill ?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Add</Button>
    </form>
  );
}
