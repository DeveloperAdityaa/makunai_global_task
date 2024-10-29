import React, { useState, useEffect } from "react";
import ToDoItem from "./components/ToDoItem";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from localStorage on first render
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save to localStorage whenever tasks are updated
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = (taskText) => {
    const newTask = { text: taskText, completed: false, id: Date.now() };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const editTask = (taskId, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTaskForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
