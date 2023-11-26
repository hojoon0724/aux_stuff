const toDoContainer = document.querySelector("#to-do-id");

const toDoDatabase = [
  { complete: false, task: "Take out the Trash" },
  { complete: false, task: "Buy bacon" },
];

let textToSend = "";

function addTaskToDB() {
  const newTaskObject = {
    complete: false,
    task: entryText.value,
  };
  toDoDatabase.push(newTaskObject);
}

function createNewRow(i) {
  let newRow = document.createElement("div");
  newRow.className = `to-do-box`;
  newRow.id = `row-${i}`;
  toDoContainer.append(newRow);
}

function createCheckBox(i) {
  const targetRow = document.querySelector(`#row-${i}`);
  const newCheckBox = document.createElement("div");
  const newCheckBoxBox = document.createElement("input");
  newCheckBox.className = `checkbox-div`;
  newCheckBoxBox.setAttribute("type", "checkbox");
  newCheckBoxBox.id = `checkbox-${i}`;
  targetRow.append(newCheckBox);
  newCheckBox.append(newCheckBoxBox);
}

function createOrderBox(i) {
  const targetRow = document.querySelector(`#row-${i}`);
  const taskOrder = document.createElement("div");
  taskOrder.className = "order";
  taskOrder.id = `order-${i}`;
  taskOrder.innerText = i;
  targetRow.append(taskOrder);
}

function prepareText() {
  textToSend = entryText.value;
}

function createTaskText(i) {
  const targetRow = document.querySelector(`#row-${i}`);
  const newTaskText = document.createElement("div");
  newTaskText.className = `tasktext`;
  newTaskText.id = `tasktext-${i}`;
  newTaskText.innerText = textToSend;
  targetRow.append(newTaskText);
}

function createEditButton(i) {
  const targetRow = document.querySelector(`#row-${i}`);
  const editButton = document.createElement("button");
  editButton.className = `edit-button`;
  editButton.id = `edit-button-${i}`;
  editButton.innerText = `Edit`;
  targetRow.append(editButton);
}

function nextTaskIndex() {
  return toDoDatabase.length - 1;
}

function resetInput() {
  entryText.value = "";
}

const addButton = document.querySelector("#add");
const entryText = document.querySelector("#new-item");

function addExistingFromDB() {
  if (toDoDatabase.length === 0) {
  }
  for (i = 0; i < toDoDatabase.length; i++) {
    textToSend = toDoDatabase[i].task;
    console.log(textToSend);
    createNewRow(i);
    createCheckBox(i);
    createOrderBox(i);
    createTaskText(i);
    createEditButton(i);
  }
}

addExistingFromDB();

addButton.addEventListener("click", () => {
  prepareText();
  addTaskToDB();
  console.log(toDoDatabase);
  createNewRow(nextTaskIndex());
  createCheckBox(nextTaskIndex());
  createOrderBox(nextTaskIndex());
  createTaskText(nextTaskIndex());
  createEditButton(nextTaskIndex());
  console.log(nextTaskIndex());
  resetInput();
});

function editTask(i) {
  const targetTaskText = document.querySelector(`#tasktext-${i}`);
  const newText = prompt(targetTaskText.innerText);
  toDoDatabase[i].task = newText;
  targetTaskText.innerText = newText;
}

function getButtonID(i) {
  console.log(document.querySelector(`#tasktext-${i}`));
}

toDoDatabase.forEach((task) => {
  console.log(toDoDatabase.indexOf(task));
});

const editButtonPress = document.querySelectorAll(".edit-button");
editButtonPress.forEach(function (current) {
  current.addEventListener("click", console.log(`clicked${current}`));
});
