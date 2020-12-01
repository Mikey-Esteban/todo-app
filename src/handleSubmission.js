import todoFactory from './todoFactory'
import addTodoToListGroup from './addTodoToListGroup'
import renewPopovers from './helpers/renewPopovers'
import { handleFormData, handleCheckedTodo, handleDeleteTodo } from './helpers/handlerHelpers'
import { v4 as uuid } from 'uuid';


let todosList = [];

const handleSubmission = event => {

  console.log('handle submission ran');
  // stop page reset
  event.preventDefault();

  // gather data to create Todo
  const data = handleFormData(event);
  data.id = uuid();
  const todo = todoFactory(data);
  todosList.push(todo);
  console.log(todosList);
  // update UI
  addTodoToListGroup(todo);

  // each time we create a list, add the event listeners
  const li = document.getElementById(`${data.id}`);
  console.log(li);
  // add checkbox event listeners
  const checkbox = li.querySelector('INPUT');
  checkbox.addEventListener('click', event => {
    console.log('in checkbox event listener');
    handleCheckedTodo(event);
    const id = event.target.parentNode.id;
    const todo = todosList.find(el => el.id == id)
    todo.completed == false ? todo.completed = true : todo.completed = false ;
  });
  // add trash button event listeners
  const trashBtn = li.querySelector('.trash');
  trashBtn.addEventListener('click', event => {
    console.log('in trash btn event listener');
    let id;
    event.target.tagName == 'A' ?
      id = event.target.parentNode.id :
      id = event.target.parentNode.parentNode.id ;
    handleDeleteTodo(event);
    console.log(todosList);
    todosList = todosList.filter(todo => todo.id !== id );
    console.log(todosList);
  });


  // Popovers for notes
  renewPopovers();
}


export default handleSubmission
