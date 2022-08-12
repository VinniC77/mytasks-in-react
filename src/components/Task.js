import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid yellow" } : {}}
    >
      <div className="task-title" title="Complete the task" 
      onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          className="remove-task-button" title="Delete the task"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
        <button
          className="see-task-details-button" title="More details"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
  //   return <div className="task-container">{task.title}</div>;
};

export default Task;