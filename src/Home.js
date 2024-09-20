import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Home = ({ tasks, addTask, removeTask, updateTask }) => (
  <div>
    <TaskForm addTask={addTask} />
    <TaskList tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
  </div>
);

export default Home;
