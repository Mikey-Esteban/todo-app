const FormHelp = (data) => {
  const { id, text } = data

  const DIV = document.createElement('DIV');
  DIV.classList.add('form-text');
  DIV.id = id;
  DIV.textContent = text;

  return DIV
}

const FormInput = (input) => {
  const { id, type, help } = input;

  const INPUT = document.createElement('INPUT');
  input['type'] == 'range' ?
    INPUT.classList.add('form-range') :
    INPUT.classList.add('form-control') ;
  INPUT.id = id
  INPUT.setAttribute('type', type);
  INPUT.setAttribute('aria-describedby', help);
  if (input['min']) {
    INPUT.setAttribute('min', input['min']);
    INPUT.setAttribute('max', input['max']);
  }

  return INPUT
}

const FormLabel = (input) => {
  const { value, text } = input;

  const LABEL = document.createElement('LABEL');
  LABEL.classList.add('form-label');
  LABEL.setAttribute('for', value);
  LABEL.textContent = text;

  return LABEL
}

const FormTextarea = ({id}) => {

  const TEXTAREA = document.createElement('TEXTAREA');
  TEXTAREA.classList.add('form-control');
  TEXTAREA.setAttribute('rows', '3');
  TEXTAREA.id = id;

  return TEXTAREA
}

export { FormHelp, FormInput, FormLabel, FormTextarea }
