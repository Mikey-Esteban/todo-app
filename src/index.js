import ModalTrigger from './components/ModalTrigger'
import Modal from './components/Modal'
import Accordion from './components/Accordion'
import todoFactory from './todoFactory'
import addTodoToListGroup from './addTodoToListGroup'
import handleSubmission from './handleSubmission'

window.addEventListener('DOMContentLoaded', event => {

  const todosList = [];

  const mainDiv = document.querySelector('#content');

  const modalWRAPPER = document.createElement('DIV');
  modalWRAPPER.classList.add('container', 'my-5');

  const modalTRIGGER = ModalTrigger();
  modalWRAPPER.append(modalTRIGGER);
  const MODAL = Modal();
  const ACCORDION = Accordion();

  mainDiv.append(modalWRAPPER, MODAL, ACCORDION);

  const form = mainDiv.querySelector('#todoForm');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = handleSubmission(event);
    const todo = todoFactory(data)
    todosList.push(todo);
    console.log(todosList);
    addTodoToListGroup(todo);
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
