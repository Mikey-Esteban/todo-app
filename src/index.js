import ModalTrigger from './components/ModalTrigger'
import Modal from './components/Modal'
import Accordion from './components/Accordion'
import todoFactory from './todoFactory'
import addTodoToListGroup from './addTodoToListGroup'
import handleFormData from './handleFormData'
import handleCheckedTodo from './handleCheckedTodo'
import handleDeleteTodo from './handleDeleteTodo'
import { v4 as uuid } from 'uuid';

window.addEventListener('DOMContentLoaded', event => {

  let todosList = [];

  const mainDiv = document.querySelector('#content');

  const modalTRIGGER = ModalTrigger();
  const MODAL = Modal();
  const ACCORDION = Accordion();

  mainDiv.append(modalTRIGGER, MODAL, ACCORDION);

  const form = mainDiv.querySelector('#todoForm');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = handleFormData(event);
    data.id = uuid();
    const todo = todoFactory(data);
    todosList.push(todo);
    console.log(todosList);
    addTodoToListGroup(todo);

    // each time we create a list, add the event listeners
    const li = document.getElementById(`${data.id}`);
    const checkbox = li.querySelector('INPUT');
    checkbox.addEventListener('click', event => {
      handleCheckedTodo(event);
      const id = event.target.parentNode.id;
      const todo = todosList.find(el => el.id == id)
      todo.completed == false ? todo.completed = true : todo.completed = false ;
    });

    const trashBtn = li.querySelector('.trash');
    trashBtn.addEventListener('click', event => {
      let id;
      event.target.tagName == 'A' ?
        id = event.target.parentNode.id :
        id = event.target.parentNode.parentNode.id ;
      handleDeleteTodo(event);
      todosList = todosList.filter(todo => todo.id !== id );
    });

    renewPopovers();
  });


  const renewPopovers = () => {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })

    var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
      trigger: 'focus'
    });
  }



})
