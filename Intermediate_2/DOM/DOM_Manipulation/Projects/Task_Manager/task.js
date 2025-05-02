function addTask(){
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addTask = document.getElementById("addTask");
    
    const taskVal = taskInput.value;

    if(taskVal.trim() === '') return;

    const li = document.createElement('li');
    li.innerText = taskVal;

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✔️";
    completeBtn.classList.add('styling');
    completeBtn.onclick = function () {
        // li.style.textDecoration = 'line-through';
        li.classList.toggle("completed")
    }
    li.appendChild(completeBtn);

    const editBtn = document.createElement("button");
    editBtn.innerText = "✒️";
    editBtn.classList.add("styling");
    editBtn.onclick = function () {
        // li.innerText = taskVal.input;
    }

    li.appendChild(editBtn);

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.classList.add("styling");
    delBtn.onclick = function () {
        li.remove();
    }
    li.appendChild(delBtn);

    taskList.appendChild(li);

    taskInput.value = '';
}

function filterList() {
    const inputElem = document.getElementById("searchInput");
    const input = inputElem.value;

    const items = document.querySelectorAll("ul#taskList li");

    items.forEach((item) => {
        item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
        // item.style.backgroundColor = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "green" : "red";
    })

}