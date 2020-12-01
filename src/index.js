import ModalTrigger from './components/ModalTrigger'
import Modal from './components/Modal'
import Accordion from './components/Accordion'
import handleSubmission from './handleSubmission'

window.addEventListener('DOMContentLoaded', event => {

  const mainDiv = document.querySelector('#content');

  const modalTRIGGER = ModalTrigger();
  const MODAL = Modal();
  const ACCORDION = Accordion();
  mainDiv.append(modalTRIGGER, MODAL, ACCORDION);

  const form = mainDiv.querySelector('#todoForm');
  form.addEventListener('submit', handleSubmission);

})
