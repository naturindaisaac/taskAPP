const task_input=document.getElementById("task_input");
const task_form=document.getElementById("task_form");
const task_list=document.getElementById("task_list");

task_form.addEventListener("submit", function(event) 
{ event.preventDefault();
    const task_input= document.getElementById("task_input");
    //remove or trim extra spaces in the input text
    const task_text= task_input.value.trim();
    //console.log(task_text);
//counter variable to track the index of the tasks
    let taskIndex=1;

if(task_text!==""){
    //if the text field is not empty then, create or add a new task item
    const task_item=document.createElement("li");
    task_item.classList.add("task_item");
    task_item.textContent=`Task -${task_text}`;
    //completed task functionality
    task_item.addEventListener("click",function () {
        console.log("completed");
        this.classList.toggle("completed");
        
    })
    //add the new task item to the list
    task_list.appendChild(task_item);
    //icrement the task index
    
}
});