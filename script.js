
const taskList = document.getElementById("list-display");

const addToTaskList = (task) => {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
};

const takeUserInput=()=>{
  let taskForm = document.createElement("form");
  taskForm.innerHTML =`<input type="text"> <input type="radio"`
  taskList.appendChild(taskForm)
}

document.addEventListener("DOMContentLoaded",takeUserInput)

