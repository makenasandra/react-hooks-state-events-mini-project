import {React, useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const [tasksToDisplay, setTasksToDisplay] = useState(tasks);

  function handleDeleteClick(text){
    console.log("delete", text);
    let remainingtasks
    setTasksToDisplay(tasksToDisplay.filter(task => !(task.text === text)));

  }
  let taskList = tasksToDisplay.map(task=> {
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
