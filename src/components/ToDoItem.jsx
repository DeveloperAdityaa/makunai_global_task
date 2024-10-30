import React from "react";
import "./../css/ToDoItem.css";
import { FaTrash } from "react-icons/fa";

function ToDoItem({ task, deleteTask, toggleTaskCompletion }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        className="task-checkbox"
      />
      <span className="task-text">{task.text}</span>

      <FaTrash className="delete-icon" onClick={() => deleteTask(task.id)} />
    </li>
  );
}

export default ToDoItem;
