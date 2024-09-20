import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TaskDetail from './TaskDetail';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  return (
    <Router>
      <div className="App">
        <h1>Task Management System</h1>
        <Routes>
          <Route path="/" element={<Home tasks={tasks} addTask={addTask} removeTask={removeTask} updateTask={updateTask} />} />
          <Route path="/task/:id" element={<TaskDetail tasks={tasks} updateTask={updateTask} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
