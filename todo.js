  let todoList = [];
  displayItems()
  function AddTodo(){
  let inputElement = document.querySelector("#todo-input");
  let inputItem = inputElement.value;
  todoList.push(inputItem);
  inputElement.value = "";
  console.log(todoList);
  displayItems();
  };

  function displayItems(){
    let displayElement = document.querySelector("#todo-items");
  displayElement.innerText = "";
    for(let i=0; i<todoList.length; i++){
    displayElement.innerText = displayElement.innerText +" \n " + todoList[i];
    
  }
  }