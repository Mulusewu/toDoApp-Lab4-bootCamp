const taskList = document.getElementById("list-display");
const takeUserInput = document.getElementById("takeuserInput");

let tasks = [];

class userData {
  constructor(title, status) {
    this.title = title;
    this.status = status;
  }
}

let atheletics = new userData("run", "on");
let code = new userData("code", "on");
let walk = new userData("walk", "on");
let eat = new userData("eat", "off");
tasks.push(atheletics);
tasks.push(code);
tasks.push(walk);
tasks.push(eat);

//store user data to the local storage
const collectUserInput = (e) => {
  e.preventDefault();

  let taskForm = document.createElement("form");
  taskForm.innerHTML = `<input id="titleField" type="text"> <input id="check-box" type="checkbox"> `;
  taskList.appendChild(taskForm);
  let title = document.getElementById("titleField").value;
  let status = document.getElementById("check-box").value;
  let taskElement = new userData(title, status);

  persistUserDataToBrowserStorage(taskElement);
};

let btn = document.getElementById("AddBtn");
btn.addEventListener("click", collectUserInput);

function persistUserDataToBrowserStorage(taskElement) {
  let existing = JSON.parse(localStorage.getItem("tasks")) || [];

  const exists = existing.some(
    (task) =>
      task.title.toLowerCase().trim() === taskElement.title.toLowerCase().trim()
  );
  if (!exists) {
    existing.push(taskElement);
    localStorage.setItem("tasks", JSON.stringify(existing));
  }

  console.log(JSON.parse(localStorage.getItem("tasks") || []));
}

//retrive taskList from local storage and display it to user in task display board.
const loadTaskList = () => {
  let retrievedtaskList = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log("retr", retrievedtaskList);
  let ul = document.createElement("ul");
  for (let i = 0; i < retrievedtaskList.length; i++) {
    let li = document.createElement("li");

    li.innerHTML = `<p id="title${i}" class="taskTitle">${retrievedtaskList[i].title}</p>
    <input class="checkBoxValue${i}" id="check-box" type="checkbox" value='${retrievedtaskList[i].status}'><button id="deletebtn" onclick="deleteTask(retrievedtaskList[i].title)"> Delete </button>`;
    li.style.listStyle = "none";
    li.style.borderRadius = "5px";

    li.style.display = "flex";
    li.style.margin = "5px";
    // li.style.textAlign ="center"
    li.style.width = "100%";
    ul.appendChild(li);
    //ul.style.display="flex"

    //  ul.style.flexDirection ="column"
    //  ul.style.justifyContent ="center"
    //  ul.style.justifyContent="space-between"
  }
  taskList.appendChild(ul);
  taskList.style.width = "100%";
};

document.addEventListener("DOMContentLoaded", loadTaskList);

function currentDate() {
  const currenttime = new Date();

  const day = currenttime.getDate();
  const month = currenttime.toLocaleString("default", { month: "long" });
  const hours = currenttime.getHours().toString().padStart(2, "0");
  const minutes = currenttime.getMinutes().toString().padStart(2, "0");

  let time = new Date();
  let headerDate = document.getElementById("header-date");
  headerDate.textContent = `${day} ${month} ${hours}:${minutes}`;
}
currentDate();

const stroke = () => {
  for (i = 0; i < checkBox.length; i++) {
    let checkBox = document.getElementById("checkBoxValue${i}").value;
    console.log(checkBox);
  }
};
stroke();

function deleteTask(taskId) {
  let remainingTasks;

  let existing = JSON.parse(localStorage.getItem("tasks")) || [];
  remainingTasks = existing.map((task) => {
    if (!task.title.trim() === taskId.trim()) {
    }
  });

  console.log("from deletTask", existing);
}
