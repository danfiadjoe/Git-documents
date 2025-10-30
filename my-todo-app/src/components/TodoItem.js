import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center p-3 border rounded mb-2 bg-white dark:bg-gray-800">
      <div onClick={onToggle} className="cursor-pointer">
        <p className={todo.completed ? 'line-through text-gray-400' : ''}>
          {todo.text}
        </p>
        <small className="text-sm text-gray-500">Due: {todo.dueDate}</small>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
