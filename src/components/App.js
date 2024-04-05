import { React, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksToDisplay, setTasksToDisplay] = useState(TASKS);

  function handleCategoryClick(category) {
    console.log(category);
    setTasksToDisplay(TASKS.filter(task => {
      if (category === "All") return true;
      return task.category === category;
    }
    ));
  }

  function handleDeleteClick(text) {
    console.log("delete", text);

    setTasksToDisplay(tasksToDisplay.filter(task => !(task.text === text)));

  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryClick={handleCategoryClick} />
      <NewTaskForm />
      <TaskList tasks={tasksToDisplay} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
