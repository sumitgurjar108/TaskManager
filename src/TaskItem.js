import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, removeTask, toggleCompletion }) => {
  return (
    <li>
      <Link to={`/task/${task.id}`}>{task.text}</Link>
      <span> ({task.priority}) </span>
      <button onClick={toggleCompletion}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={removeTask}>Remove</button>
    </li>
  );
};

export default TaskItem;
