const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask(){
    if(inputBox === ""){
        alert("YOU MUST WRITE SOMETHING")
    }
    else{
       let li =  document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

       let span =  document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove("");
        saveData();
    }
 
}, false );


//SAVING THE DATA IN LIST_CONTAINER;

function saveData(){
    localStorage.setItem("data", listContainer.innerText);
};

////store data even after reloading the page.
//getItem to get data from some place
//setItem to pass on the data to some place

function showTask(){
    listContainer.innerText = localStorage.getItem("data");
}
showTask();