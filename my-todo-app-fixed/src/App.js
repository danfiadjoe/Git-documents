import { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TodoItem from './components/TodoItem';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTodo = () => {
    if (input.trim() && dueDate) {
      setTodos([...todos, { text: input, dueDate, completed: false }]);
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

  return (
    <div className="max-w-xl mx-auto p-4">
      <Header />
      <TaskForm
        input={input}
        setInput={setInput}
        dueDate={dueDate}
        setDueDate={setDueDate}
        addTodo={addTodo}
      />
      <ul>
        {todos.map((todo, index) => (
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
