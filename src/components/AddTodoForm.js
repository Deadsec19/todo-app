import React, { useState } from 'react';

const AddTodoForm = ({ addTodo, setFilter }) => {
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!text.trim()) return;
      addTodo(text);
      setText('');
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Todo..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <div>
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('active')}>Active</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
        </div>
      </div>
    );
  };
  

export default AddTodoForm;
