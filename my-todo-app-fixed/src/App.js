import React, { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';
import TaskStats from './components/TaskStats';
import TodoItem from './components/TodoItem';
import Toast from './components/Toast';
import Modal from './components/Modal';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [filter, setFilter] = useState('All');
  const [toast, setToast] = useState({ show: false, message: '' });
  const [modal, setModal] = useState({ show: false, index: null });

  const addTodo = () => {
    if (input.trim() && dueDate) {
      setTodos([...todos, { text: input, dueDate, completed: false }]);
      setInput('');
      setDueDate('');
      showToast('Task added!');
    }
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
    showToast(updated[index].completed ? 'Task completed!' : 'Task marked active');
  };

  const confirmDelete = (index) => {
    setModal({ show: true, index });
  };

  const deleteTodo = () => {
    const updated = todos.filter((_, i) => i !== modal.index);
    setTodos(updated);
    setModal({ show: false, index: null });
    showToast('Task deleted!');
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 2000);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

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
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskStats todos={todos} />
      <ul>
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onToggle={() => toggleComplete(index)}
            onDelete={() => confirmDelete(index)}
          />
        ))}
      </ul>
      <Toast message={toast.message} show={toast.show} />
      <Modal
        show={modal.show}
        onConfirm={deleteTodo}
        onCancel={() => setModal({ show: false, index: null })}
      />
    </div>
  );
}

export default App;
