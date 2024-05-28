let inputs = document.getElementById("todo-input");
let text = document.querySelector(".text");
let button = document.getElementById("submit");

button.addEventListener("click", Add);
function Add(){
    if(inputs.value == ""){
        alert("Please enter a task");
    }else{
        let tasks = document.createElement("ul");//create in element tasks
        tasks.innerHTML=`${inputs.value} <i class="fa-regular fa-trash-can"></i>`;
        text.appendChild(tasks);
        inputs.value = "";

        //remove tasts 
        tasks.querySelector("i").addEventListener("click", remove);
        function remove(){ 
            tasks.remove();
        }
         // Check for scrolling (improved logic)
    const totalTasks = text.querySelectorAll("ul").length;
    if (totalTasks >= 8) {
      // Calculate scroll height based on individual task height
      const taskHeight = tasks.offsetHeight; // Get height of the newly added task
      const scrollHeight = totalTasks * taskHeight;

      // Ensure scroll height doesn't exceed the container's height
      const containerHeight = text.clientHeight;
      scrollHeight = Math.min(scrollHeight, containerHeight);

      // Scroll to the bottom with smooth animation
      text.scrollTo({ top: scrollHeight, behavior: "smooth" });
    }
  }
}
    

