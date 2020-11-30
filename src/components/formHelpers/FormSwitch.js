const FormSwitch = () => {

  const DIV = document.createElement('DIV');
  DIV.classList.add('form-check', 'form-switch', 'mb-3');

  const INPUT = document.createElement('INPUT');
  INPUT.classList.add('form-check-input');
  INPUT.setAttribute('type', 'checkbox');
  INPUT.id = 'completed';

  const LABEL = document.createElement('LABEL');
  LABEL.classList.add('form-check-label');
  LABEL.setAttribute('for', 'completed');
  LABEL.textContent = 'Completed?'

  DIV.append(INPUT, LABEL);

  return DIV
}

export default FormSwitch
