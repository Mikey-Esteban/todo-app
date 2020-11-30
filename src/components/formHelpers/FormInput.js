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

export default FormInput
