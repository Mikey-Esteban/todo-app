import todoFactory from './todoFactory'
import addTodoToListGroup from './addTodoToListGroup'
import renewPopovers from './helpers/renewPopovers'
import { handleFormData } from './helpers/handlerHelpers'
import { addCheckboxListeners, addTrashBtnListeners } from './helpers/listenerHelpers'
import { v4 as uuid } from 'uuid';

let myStorage = window.localStorage;
let todosList = JSON.parse(myStorage.getItem('todos')) || [];

const handleSubmission = event => {

  // stop page reset
  event.preventDefault();

  // gather data to create Todo
  const data = handleFormData(event);
  data.id = uuid();
  const todo = todoFactory(data);
  todosList.push(todo)
  myStorage.setItem('todos', JSON.stringify(oldTodos));
  console.log(todosList);
  // update UI
  addTodoToListGroup(todo);
  addCheckboxListeners(todo, todosList);
  addTrashBtnListeners(todo, todosList, myStorage);
todosList
  // Popovers for notes
  renewPopovers();
}

export default handleSubmission
