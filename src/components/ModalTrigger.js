const ModalTrigger = () => {

  const WRAPPER = document.createElement('DIV');
  WRAPPER.classList.add('container', 'my-5');

  const BUTTON = document.createElement('BUTTON');
  BUTTON.classList.add('btn', 'btn-primary');
  BUTTON.setAttribute('type', 'button');
  BUTTON.setAttribute('data-toggle', 'modal');
  BUTTON.setAttribute('data-target', '#formModal');
  BUTTON.textContent = 'Add Todo';

  WRAPPER.append(BUTTON);

  return WRAPPER
}

export default ModalTrigger
