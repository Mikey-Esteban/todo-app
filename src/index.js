import ModalTrigger from './components/ModalTrigger'
import Modal from './components/Modal'
import Accordion from './components/Accordion'
import handleSubmission from './handleSubmission'
import addTodoToListGroup from './addTodoToListGroup'
import { addCheckboxListeners, addTrashBtnListeners } from './helpers/listenerHelpers'

let myStorage = window.localStorage;
let todosList = JSON.parse(myStorage.getItem('todos')) || [];

window.addEventListener('DOMContentLoaded', event => {

  const mainDiv = document.querySelector('#content');

  const modalTRIGGER = ModalTrigger();
  const MODAL = Modal();
  const ACCORDION = Accordion();
  mainDiv.append(modalTRIGGER, MODAL, ACCORDION);

  // check if myStorage has items
  if (todosList) {
    for (let todo of todosList) {
      console.log(todo);
      addTodoToListGroup(todo);
      addCheckboxListeners(todo, todosList);
      addTrashBtnListeners(todo, todosList, myStorage);
    }
  }
  const form = mainDiv.querySelector('#todoForm');
  form.addEventListener('submit', handleSubmission);

})
