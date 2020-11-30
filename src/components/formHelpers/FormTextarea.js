const FormTextarea = ({id}) => {

  const TEXTAREA = document.createElement('TEXTAREA');
  TEXTAREA.classList.add('form-control');
  TEXTAREA.setAttribute('rows', '3');
  TEXTAREA.id = id;

  return TEXTAREA
}

export default FormTextarea
