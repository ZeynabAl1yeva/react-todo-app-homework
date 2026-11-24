import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") return;
    onAdd(text);
    setText("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;