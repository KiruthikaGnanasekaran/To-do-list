import { useState } from "react";
import "./App.css";
function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };
  const deleteTask = (index) =>{
    setTasks(tasks.filter((item,i) => i!==index));
  };

  return (
    <div className= "container">
      <h2>To Do List</h2>
    <div className = "input-container">
      <input
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />
    
    
      <button className="add-btn" 
       onClick={addTask}>Add</button>
    </div>

      <ul>
        {tasks.map((item, position) => (
          <li key={position}>
            {item}
            <button 
            className = "delete-btn"
            onClick= {() => deleteTask(position)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;