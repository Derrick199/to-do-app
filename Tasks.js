// components/Task.js
import React from 'react';

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="flex items-center p-2">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="mr-2"
      />
      <p className={task.completed ? 'line-through' : ''}>{task.text}</p>
      <button
        onClick={() => deleteTask(task.id)}
        className="ml-auto text-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
