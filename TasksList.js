// components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
