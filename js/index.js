const toDoForm = document.getElementById("to-do-task");
const deleteTaskButton = document.getElementById("delete-task");
const taskList = document.getElementById("task-list");

// To add <li> element with task details and toggle button

toDoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskInput = document.getElementById("task-input");
  const task = taskInput.value;

  const listItem = document.createElement("li");
  const toggleButton = document.createElement("button");

  toggleButton.innerHTML = "Done";

  let status = false;

  toggleButton.onclick = () => {
    status = !status;
    toggleButton.innerHTML = status ? "Not Done" : "Done";
    listItem.style.textDecoration = status ? "line-through" : "none";
  };

  toggleButton.className = "btn btn-primary mx-2";

  listItem.innerHTML = task;
  listItem.style.margin = "5px";
  listItem.style.padding = "5px";
  listItem.appendChild(toggleButton);
  taskList.appendChild(listItem);

  taskInput.value = "";
});

// To delete <li> element on click
deleteTaskButton.addEventListener("click", () => {
  if (taskList.hasChildNodes()) {
    let taskListLength = taskList.children.length;
    taskList.removeChild(taskList.children[taskListLength - 1]);
  } else {
    alert("No task in the list");
  }
});
