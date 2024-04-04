import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  let taskList = tasks.map(task=> {
    const {category, text} = task;
    return(
      <Task category={category} text={text}/>
    )})
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
