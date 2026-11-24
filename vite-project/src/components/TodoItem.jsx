import { useState } from "react";

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.title);
  const handleSave = (event) => {
    event.preventDefault();
    if (text === "") return;
    onEdit(todo.id, text);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setText(todo.title);
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <li className="todo-item">
        <form className="edit-form" onSubmit={handleSave}>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button type="submit" className="save">Save</button>
          <button type="button" className="cancel" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </li>
    );
  }
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <p className={todo.completed ? "title done" : "title"}>
        {todo.title}
      </p>
      <button className="edit" onClick={() => setIsEditing(true)}>
        Edit
      </button>
      <button className="delete" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;