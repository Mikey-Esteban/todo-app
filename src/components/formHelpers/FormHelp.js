const FormHelp = (data) => {
  const { id, text } = data

  const DIV = document.createElement('DIV');
  DIV.classList.add('form-text');
  DIV.id = id;
  DIV.textContent = text;

  return DIV
}

export default FormHelp
