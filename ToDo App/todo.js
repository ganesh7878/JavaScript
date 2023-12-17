
let todoList= [
];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, duedate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();

}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
for(let i = 0; i < todoList.length; i++){
  let {item,duedate} = todoList[i];

    newHtml += `
      <span>${item}</span>
      <span>${duedate}</span>

      <button id="btn-delete"  onclick= "todoList.splice(${i}, 1); displayItems();" > Delete</button>
      `;
  }
  containerElement.innerHTML = newHtml;
}