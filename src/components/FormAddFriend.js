import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const newFiend = {
      id,
      name,
      image: `${image}?={id}`,
      balance: 0,
    };
    onAddFriend(newFiend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form onClick={(e) => handleSubmit(e)} className="form-add-friend">
      <label>👭 Friend name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <label>🌄 Image URL</label>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
      />
      <Button>Add</Button>
    </form>
  );
}
