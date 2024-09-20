import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetail = ({ tasks, updateTask }) => {
  const { id } = useParams();
  const task = tasks.find(task => task.id === Number(id));

  if (!task) {
    return <div>Task not found</div>;
  }

  const toggleCompletion = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div>
      <h2>Task Details</h2>
      <p>Task: {task.text}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
      <p>Deadline: {task.deadline}</p>
      <button onClick={toggleCompletion}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </div>
  );
};

export default TaskDetail;
