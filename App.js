import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // State to manage active tasks
  const [newTask, setNewTask] = useState(''); // State to manage new task input
  const [deletedTasks, setDeletedTasks] = useState([]); // State to manage deleted tasks

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Function to delete a task
  const deleteTask = (indexToDelete) => {
    const taskToDelete = tasks[indexToDelete];
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    
    setTasks(updatedTasks); // Update the task list after deletion
    setDeletedTasks([...deletedTasks, taskToDelete]); // Add the deleted task to the deletedTasks array
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Input field to add a new task */}
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <h2>Active Tasks</h2>
      {/* Active Task List with dynamic numbering */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index + 1}. {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Deleted Tasks List */}
      <h2>Deleted Tasks</h2>
      {deletedTasks.length > 0 ? (
        <ul>
          {deletedTasks.map((task, index) => (
            <li key={index}>
              {index + 1}. {task}
            </li>
          ))}
        </ul>
      ) : (
        <p>No deleted tasks yet.</p>
      )}
    </div>
  );
}

export default App;
