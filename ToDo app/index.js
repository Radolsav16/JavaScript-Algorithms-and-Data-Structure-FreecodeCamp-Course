const addTaskBtn = document.querySelector("#open-task-form-btn");
const taskForm = document.querySelector("#task-form");
const titleInput = document.querySelector("#title-input");
const dateInput = document.querySelector("#date-input");
const descriptionInput = document.querySelector("#description-input");

let tasksContainer = document.querySelector("#tasks-container");

const todoList = [];

const currentData = {};

const closeFormButton = document.querySelector("#close-task-form-btn");
const confirmCloseDialog = document.querySelector("#confirm-close-dialog");

const cancelBtn = document.querySelector("#cancel-btn");
const discardBtn = document.querySelector("#discard-btn");

addTaskBtn.addEventListener("click", () => {
  reset();
  taskForm.classList.toggle("hidden");
});

closeFormButton.addEventListener("click", () => confirmCloseDialog.showModal());
cancelBtn.addEventListener("click", cancelModal);
discardBtn.addEventListener("click", discard);

taskForm.addEventListener("submit", addTask);

const todoTemplate = (arr = []) => {
  tasksContainer.innerHTML = arr
    .map(({ title, date, description }) => {
      return `
    <div class="task" id="${title}-${date}">
      <p><strong>Title:</strong> ${title}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Description:</strong> ${description}</p>
      <button id="edit-btn" type="button" class="btn">Edit</button>
      <button id ="delete-btn" type="button" class="btn">Delete</button> 
    </div>
`;
    })
    .join("");
};

display();

function editToDo(e) {
  const div = e.target.parentElement;
  const [title, date] = div.id.split("-");
  taskForm.classList.toggle("hidden");
  const index = todoList.findIndex((item) => item.title === title)
  if (index !== -1) {
    const obj = todoList[index];
    titleInput.value = obj.title;
    dateInput.value = obj.date;
    descriptionInput.value = obj.description;

    todoList.splice(index, 1);
    
  }
}

function deleteToDo() {
  const index = todoList.findIndex((item) => titleInput.value === item.title);
  todoList.splice(index, 1);
  localStorage.setItem('data',JSON.stringify(todoList));
  todoTemplate(todoList);
  attachEvent();
  reset();
}

function addTask(e) {
  e.preventDefault();
  tasksContainer.innerHTML = "";
  const title = titleInput.value;
  const date = dateInput.value;
  const description = descriptionInput.value;
  taskForm.classList.toggle("hidden");

  todoList.unshift({ title, date, description });

  localStorage.setItem("data", JSON.stringify(todoList));

  todoTemplate(todoList);

  attachEvent();
}

function cancelModal(e) {
  confirmCloseDialog.close();
}

function discard() {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
  reset();
}

function reset() {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
}

function display() {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  todoTemplate(data);
  attachEvent();
}

function attachEvent() {
  const editButtons = document.querySelectorAll("#edit-btn");
  const deleteButtons = document.querySelectorAll("#delete-btn");

  editButtons.forEach((button) => button.addEventListener("click", editToDo));
  deleteButtons.forEach((button) =>
    button.addEventListener("click", deleteToDo)
  );
}
