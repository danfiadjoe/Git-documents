import React from 'react';

function TaskStats({ todos }) {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="text-center p-4">
      <p>Total: {total} | Completed: {completed} | Remaining: {remaining}</p>
    </div>
  );
}

export default TaskStats;
