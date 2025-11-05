import { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TodoItem from './components/TodoItem';
import FilterBar from './components/FilterBar';
import TaskStats from './components/TaskStats';
import Toast from './components/Toast';
import Modal from './components/Modal';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [filter, setFilter] = useState('All');
  const [toastMsg, setToastMsg] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTaskIndex, setModalTaskIndex] = useState(null);

  const addTodo = () => {
    if (input.trim() && dueDate) {
      setTodos([...todos, { text: input, dueDate, completed: false }]);
      setInput('');
      setDueDate('');
      setToastMsg('Task added!');
    }
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const confirmDelete = (index) => {
    setModalTaskIndex(index);
    setModalOpen(true);
  };

  const deleteTodo = () => {
    setTodos(todos.filter((_, i) => i !== modalTaskIndex));
    setToastMsg('Task deleted!');
    setModalOpen(false);
    setModalTaskIndex(null);
  };

  const filteredTodos = todos.filter((todo) => {
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
      <Toast message={toastMsg} clearMessage={() => setToastMsg('')} />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <p>Are you sure you want to delete this task?</p>
        <button
          onClick={deleteTodo}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Yes, Delete
        </button>
      </Modal>
    </div>
  );
}

export default App;
