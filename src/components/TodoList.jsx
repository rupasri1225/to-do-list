import React from 'react';
import TodoItem from './TodoItem';

// The list of todos and the functions are passed as props
export default function TodoList({ todos, onToggle, onDelete }) {
  // Show a message if there are no tasks
  if (todos.length === 0) {
    return <p className="empty-state">No tasks yet. Great job!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
