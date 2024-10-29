// AddTaskForm.js
import React, { useState } from "react";
import "./../css/AddTaskForm.css"; // Import CSS for styling

function AddTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask(taskText);
    setTaskText("");
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
        className="task-input"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
}

export default AddTaskForm;
