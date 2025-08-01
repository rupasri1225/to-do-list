import React, { useState } from 'react';

// The onAdd function is passed down from App.jsx
export default function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    onAdd(inputValue);
    setInputValue(''); // Clear input after adding
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
}
