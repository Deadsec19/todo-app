import React from 'react';

const TodoList = ({ todos, toggleTodo, filter, removeTodo }) => {
    const filteredTodos = todos.filter(todo => {
      if (filter === 'all') {
        return true;
      } else if (filter === 'active') {
        return !todo.completed;
      } else if (filter === 'completed') {
        return todo.completed;
      }
      return true;
    });
  
    if (filteredTodos.length === 0) {
      return <p>No todos found.</p>;
    }
  
    return (
      <div>
        {filteredTodos.map(todo => (
          <div key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              className={todo.completed ? 'completed' : ''}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </div>
        ))}
      </div>
    );
  };
  

export default TodoList;
