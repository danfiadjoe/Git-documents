import React from 'react';

function TaskForm({ input, setInput, dueDate, setDueDate, addTodo }) {
  return (
    <div className="flex gap-2 p-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Task description"
        className="border p-2 flex-1"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  );
}

export default TaskForm;
