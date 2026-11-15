
const task = document.getElementById("task");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
    addTask();
});

function addTask() {
    const taskName = task.value.trim();

    if (taskName.length === 0) {
        alert("You must first add a task");
        return;
    }

    const list = document.createElement("li");
    list.textContent = taskName;

    const span = document.createElement("span");
    span.textContent = "\u00d7";

    list.appendChild(span);
    listContainer.append(list);

    task.value = "";

    saveTask();
}

// Handle checking and deleting tasks
listContainer.addEventListener("click", (event) => {

    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveTask();

    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveTask();
    }

});

// Save tasks to Local Storage
function saveTask() {
    localStorage.setItem("data-1", listContainer.innerHTML);
}

// Retrieve saved tasks
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data-1") || "";
}

// Display saved tasks when the application loads
showTask();
