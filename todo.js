let todoList = [
  { item: "Learn HTML", dueDate: "13/09/2025" },
  { item: "Learn CSS", dueDate: "13/09/2025" },
  { item: "Learn JavaScript", dueDate: "13/09/2025" },
];
displayItems();
function AddTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let inputItem = inputElement.value;
  let todoDate = dateElement.value;
  if (inputItem === "") {
    let errorMsg = document.createElement("span");
    errorMsg.innerText = "Please enter a valid To-Do item";
    errorMsg.style.color = "red";
    errorMsg.style.gridColumn = "1 / span 3";
    document.querySelector(".grid-container").appendChild(errorMsg);
    setTimeout(() => {
      errorMsg.remove();
    }, 2000);
    return;
  }
  todoList.push({item:inputItem,dueDate:todoDate});
  inputElement.value = "";
  dateElement.value = "";
  console.log(todoList);
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = " ";
  for (let i = 0; i < todoList.length; i++) {
    // let todoItem = todoList[i].item;
    // let todoDueDate = todoList[i].dueDate;
    let {item,dueDate} = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i},1);displayItems();">Delete</button>
  `;
  }
  containerElement.innerHTML = newHtml;
}
