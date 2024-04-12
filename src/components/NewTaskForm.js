import React, { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit }) {
  const[task, setTask] = useState( {
    text: "",
    category: "Code",
  },);
  const categoryOptions = categories.map(category=>{
    if(category === "All") return;
    return(<option key={category}>{category}</option>);
  })
  function handleTaskChange(e){
    setTask({...task,
    [e.target.name]: e.target.value})
    // console.log({[e.target.name]: e.target.value})
  }
  function handleFormSubmit(e){
    e.preventDefault();
    onTaskFormSubmit(task);
    setTask({...task,
      text: ""})
  }
  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={task.text} onChange={handleTaskChange}/>
      </label>
      <label>
        Category
        <select name="category" value={task.category} onChange={handleTaskChange}>
          {/* render <option> elements for each category here */}
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
