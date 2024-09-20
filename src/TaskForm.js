import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Low');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Work');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({
        id: Date.now(),
        text: task,
        priority,
        deadline,
        description,
        category,
        completed: false
      });
      setTask('');
      setPriority('Low');
      setDeadline('');
      setDescription('');
      setCategory('Work');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
      <option value="select_item"  disabled selected >--select item---</option>
        <option value="select level">Task-level</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="select_item" disabled selected >--select item---</option>

        <option value="Category">Task-Category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
