import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="todo-text" onClick={onToggle}>
        <span>{todo.text}</span>
        <small>Due: {todo.dueDate}</small>
      </div>
      <button onClick={onDelete}>❌</button>
    </li>
  );
}

export default TodoItem;
