import React from 'react';

// The 'todo' object, and the functions onToggle and onDelete are passed as props
export default function TodoItem({ todo, onToggle, onDelete }) {
  // Format the timestamp to be readable
  const formattedDate = new Date(todo.createdAt).toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <span className="todo-text">{todo.text}</span>
        <span className="todo-date">{formattedDate}</span>
      </div>
      <div className="todo-actions">
        <button
          className={`complete-btn ${todo.completed ? 'completed' : ''}`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
