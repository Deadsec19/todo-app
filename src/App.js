import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './styles/App.css'; // Import the App.css file from the src directory

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodoForm addTodo={addTodo} setFilter={setFilter} />
      <TodoList todos={todos} toggleTodo={toggleTodo} filter={filter} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
