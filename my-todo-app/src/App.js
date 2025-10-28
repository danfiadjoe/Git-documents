import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [filter, setFilter] = useState('All');

  const addTodo = () => {
    if (input.trim() && dueDate) {
      setTodos([
        ...todos,
        { text: input, dueDate, completed: false }
      ]);
      setInput('');
      setDueDate('');
    }
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>📅 My To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          value={input}
          placeholder="Add a task..."
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="filters">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Active')}>Active</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
      </div>

      <ul>
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onToggle={() => toggleComplete(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
