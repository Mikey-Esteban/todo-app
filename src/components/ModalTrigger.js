const ModalTrigger = () => {

  const BUTTON = document.createElement('BUTTON');
  BUTTON.classList.add('btn', 'btn-primary');
  BUTTON.setAttribute('type', 'button');
  BUTTON.setAttribute('data-toggle', 'modal');
  BUTTON.setAttribute('data-target', '#formModal');
  BUTTON.textContent = 'Add Todo';

  return BUTTON
}

export default ModalTrigger
