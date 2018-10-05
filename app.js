// TODO WITH PROMPT 

const todos = [];

const btn = document.querySelector('.btn');
btn.addEventListener('click', init);
console.log("Hello and Welcome");


function init() {
  let input = prompt("What would you like to do?");

  function listTodos() {
    console.log("**********");
    todos.forEach((item, index) => console.log(`${index}: ${item}`));
    console.log("**********");
  }

  function addTodo() {
    let newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo");
  }

  function deleteTodo() {
    let index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted Todo");
  }


  while (input !== 'quit') {
    if (input === 'list') {
      listTodos();
    } else if (input === 'new') {
      addTodo();
    } else if (input === 'delete') {
      deleteTodo();
    }
    input = prompt("What would you like to do?");
  }
  console.log("You quit the app");
}







