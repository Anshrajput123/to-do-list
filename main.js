const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");


// To add Task,
function addtask(){
    if(inputbox.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        // let div0 = document.createElement("div");
        // div0.innerHTML = `<div class="circle"><i class="fa-solid fa-circle-xmark"></i></div>`;
        let div1 = document.createElement("div");
        div1.innerHTML = inputbox.value;
        let div2 = document.createElement("div");
        div2.innerHTML = `<div class="trash-can"><i class="fa-regular fa-trash-can"></i></div>`;

        div1.style.pointerEvents="none";
        div1.classList.add("for-task");
        div2.classList.add("right-wali");
        // li.appendChild(div0);
        li.appendChild(div1);
        li.appendChild(div2);
        listcontainer.appendChild(li);
    }
    inputbox.value ="";
    savedata();
}

// To Delete Task and apply checked class,
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI" ){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "I"){


        e.target.parentElement.parentElement.parentElement.remove();
        savedata();
    }  
},false);


// For setting the Time,
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const no = document.querySelector(".time");
var today = new Date();
var times = today.getHours() + ":" + today.getMinutes();
no.innerHTML=times;
const yo = document.querySelector(".month");
var mont = monthname[today.getMonth()];
yo.innerHTML= mont;
const bo = document.querySelector(".date");
var wee = weekday[today.getDay()] + " " + today.getDate() + ",";
bo.innerHTML= wee;

// For Saving data in local storage,
function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showdata();

// For Filtering,
const list_container = document.querySelector("#list-container");
const filter_todo = document.querySelector(".filter-todo");
filter_todo.addEventListener("click", filterTodo);
function filterTodo(e) {
    const todoss = list_container.childNodes;
  todoss.forEach(function(i){
      switch (e.target.value) {
        case "all":
          i.style.display = "flex";
          break;
        case "completed":
          if (i.classList.contains("checked")) {
            i.style.display = "flex";
          } else {
            i.style.display = "none";
          }
          break;
        case "incomplete":
          if (!i.classList.contains("checked")) {
            i.style.display = "flex";
          } else {
            i.style.display = "none";
          }
      }
  });
  savedata();
  }
  