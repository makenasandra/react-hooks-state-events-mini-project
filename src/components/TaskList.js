import {React, useState} from "react";
import Task from "./Task";

function TaskList({tasks, handleDeleteClick}) {
  
  let taskList = tasks.map(task=> {
    const {category, text} = task;
    return(
      <Task key={text} category={category} text={text} deleteTask={handleDeleteClick}/>
    )})
 
    
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
