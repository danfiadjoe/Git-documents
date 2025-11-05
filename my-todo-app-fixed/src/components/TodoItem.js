import { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const saveEdit = () => {
    onEdit(text);
    setEditing(false);
  };

  return (
    <li className="flex justify-between items-center p-3 border rounded mb-2 bg-white shadow">
      <div onClick={onToggle} className="cursor-pointer flex-1">
        {editing ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={saveEdit}
            className="border p-1 w-full"
          />
        ) : (
          <p className={todo.completed ? 'line-through text-gray-400' : ''}>
            {todo.text}
          </p>
        )}
        <small className="text-sm text-gray-500">Due: {todo.dueDate}</small>
      </div>
      <div className="flex gap-2">
        <button onClick={() => setEditing(true)} className="text-blue-500 hover:text-blue-700">✏️</button>
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">❌</button>
      </div>
    </li>
  );
}
export default TodoItem;
