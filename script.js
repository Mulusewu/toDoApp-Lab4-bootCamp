
const taskList = document.getElementById("list-display");
const takeUserInput = document.getElementById("takeuserInput")

let tasks = [];

class userData{
  constructor(title, status){
    this.title = title;
    this.status= status;
  }
}

let atheletics = new userData("run","on");
let code = new userData("code","on");
let walk = new userData("walk","on");
let eat = new userData("eat","off");
tasks.push(atheletics);
tasks.push(code);
tasks.push(walk);
tasks.push(eat)


//store user data to the local storage
const storeUserInput=(e)=>{
  e.preventDefault()
  console.log("now you just entered store user data")
  let taskForm = document.createElement("form");
  taskForm.innerHTML =`<input id="titleField" type="text"> 
  <input id="check-box" type="checkbox"> `
  taskList.appendChild(taskForm);
  let title = document.getElementById("titleField").value;
  let status = document.getElementById("check-box").value;
  let taskElement = new userData(title, status);
  
  tasks.push(taskElement);
  localStorage.setItem("tasks",JSON.stringify(tasks))

   let existing = JSON.parse(localStorage.getItem("tasks") )||[];
 
  //  for(let k=0; k < existing.length ;k++){

  //   if(existing[k]!==taskElement && existing[k]!==tasks[tasks.length-1] && !existing.includes(taskElement)){
  //     localStorage.setItem("tasks", JSON.stringify(tasks));
  //   } 


  //  }
  //loadTaskList()
console.log(JSON.parse(localStorage.getItem("tasks") ||[]))

  //taskList.removeChild(taskForm);
}

let btn = document.getElementById("AddBtn");
btn.addEventListener("click",storeUserInput);











//retrive taskList from local storage and display it to user in task display board.
const loadTaskList=()=>{
  let retrievedtaskList =
  JSON.parse(localStorage.getItem("tasks")) || [];
  //console.log('ret',retrievedtaskList)

  let ul = document.createElement("ul");


  for(let i=0;i < retrievedtaskList.length; i++){
    let li = document.createElement("li");
    li.innerHTML =`<p id="title${i}" class="taskTitle">
    ${retrievedtaskList[i].title}</p>
    <input class="checkBoxValue${i}" id="check-box" type="checkbox"
    value='${retrievedtaskList[i].status}'>`
    li.style.listStyle="none";
    li.style.border ="2px solid black"
    li.style.borderRadius ="5px"
    
    li.style.margin ="0"
    li.style.padding="0 15px"
    li.style.display="flex"
    li.style.justifyContent="space-between"
    li.style.margin ="5px"
    li.style.textAlign ="center"
    ul.appendChild(li);
    ul.style.display="flex"
    
     ul.style.flexDirection ="column"
     ul.style.justifyContent ="center"
     ul.style.justifyContent="space-between"
    
   
    
    

}
taskList.appendChild(ul);

const stroke=()=>{
  
  for(i =0; i < checkBox.length; i++){
    let checkBox = document.getElementById("checkBoxValue${i}").value;
    console.log(checkBox)
  }
  
  
}
//stroke()


}



document.addEventListener("DOMContentLoaded",loadTaskList);




