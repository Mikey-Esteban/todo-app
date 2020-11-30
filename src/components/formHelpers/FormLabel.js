const FormLabel = (input) => {
  const { value, text } = input;

  const LABEL = document.createElement('LABEL');
  LABEL.classList.add('form-label');
  LABEL.setAttribute('for', value);
  LABEL.textContent = text;

  return LABEL
}

export default FormLabel
