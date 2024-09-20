import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, removeTask, updateTask }) => {
  const toggleCompletion = (task) => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={() => removeTask(task.id)}
          toggleCompletion={() => toggleCompletion(task)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
