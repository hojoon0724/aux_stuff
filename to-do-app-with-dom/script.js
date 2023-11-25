console.log("suh");

// take entry and add it to the list

// text field - store id="entry" in a let

// structure -> "to-do-container" -> "to-do-box"
// "checkbox-div"
// "order"
// "textfield"

// create element and add it to

const toDoContainer = document.querySelector("#to-do-id");
const checkBoxBox = `<input type="checkbox">`;

const toDoDatabase = [
  { complete: false, task: "Take out the Trash" },
  { complete: false, task: "Buy bacon" },
];

function initialTaskAdd() {
  if (toDoDatabase.length >= 0) {
  }
}

function addNewToDo() {
  const newRow = document.createElement("div");
  const newCheckBox = document.createElement("div");
  const newCheckBoxBox = document.createElement("input");
  const newOrder = document.createElement("div");
  const newTextField = document.createElement("div");
  const editButton = document.createElement("button");

  newRow.className = "to-do-box";
  newCheckBox.className = "checkbox-div";
  newCheckBoxBox.setAttribute("type", "checkbox");
  newOrder.className = "order";
  newTextField.className = "textfield";
  editButton.id = "arrayNumber";
  editButton.innerText = "Edit";
  newTextField.innerText = entryText.value;
  toDoContainer.append(newRow);
  newRow.append(newCheckBox);
  newCheckBox.append(newCheckBoxBox);
  newRow.append(newOrder);
  newRow.append(newTextField);
  newTextField.append(editButton);
}

function addTaskToDB() {
  const newTaskObject = {
    complete: false,
    task: entryText.value,
  };
  toDoDatabase.push(newTaskObject);
}

function nextTaskIndex() {
  return toDoDatabase.length + 1;
}

const button = document.querySelector("#add");
const entryText = document.querySelector("#new-item");

button.addEventListener("click", () => {
  addNewToDo();
  addTaskToDB();
  console.log(entryText.value);
  console.log(toDoDatabase);
  console.log(nextTaskIndex());
});

console.log(entryText.value);
