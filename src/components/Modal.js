import Form from './Form'

const Modal = () => {

  const MODAL = document.createElement('DIV');
  MODAL.classList.add('modal', 'fade');
  MODAL.id = 'formModal';
  MODAL.setAttribute('tabindex', '-1');
  MODAL.setAttribute('aria-labelledby', 'formModalLabel');
  MODAL.setAttribute('aria-hidden', 'true');

  const modalDIALOG = document.createElement('DIV');
  modalDIALOG.classList.add('modal-dialog');

  const modalCONTENT = document.createElement('DIV');
  modalCONTENT.classList.add('modal-content');

  const modalHEADER = document.createElement('DIV');
  modalHEADER.classList.add('modal-header');
  const H5 = document.createElement('H5');
  H5.classList.add('modal-title');
  H5.id = 'formModalLabel';
  H5.textContent = 'Add A New Todo!';
  const closeBTN = document.createElement('BUTTON');
  closeBTN.classList.add('btn-close');
  closeBTN.setAttribute('type', 'button');
  closeBTN.setAttribute('data-dismiss', 'modal');
  closeBTN.setAttribute('aria-label', 'Close');
  modalHEADER.append(H5, closeBTN);

  const modalBODY = document.createElement('DIV');
  modalBODY.classList.add('modal-body');
  modalBODY.append(Form());

  modalCONTENT.append(modalHEADER, modalBODY);
  modalDIALOG.append(modalCONTENT);
  MODAL.append(modalDIALOG);

  return MODAL

}

export default Modal
