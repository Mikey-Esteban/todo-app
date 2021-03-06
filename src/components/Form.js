import { FormHelp, FormInput, FormLabel, FormTextarea } from './helpers/formHelpers'
import { data } from './helpers/formData'

const Form = () => {

  const FORM = document.createElement('FORM');
  FORM.id = 'todoForm';

  for (let input of data) {
    const DIV = document.createElement('DIV');
    DIV.classList.add('mb-3');
    const LABEL = FormLabel(input['label']);
    DIV.append(LABEL);
    if (input['input']) { DIV.append(FormInput(input['input'])) };
    if (input['textarea']) { DIV.append(FormTextarea(input['textarea'])) };
    const helpDIV = FormHelp(input['help']);
    DIV.append(helpDIV);
    FORM.append(DIV);
  }

  const SUBMIT = document.createElement('BUTTON');
  SUBMIT.classList.add('btn', 'btn-primary');
  SUBMIT.setAttribute('type', 'submit');
  SUBMIT.textContent = 'Create';

  FORM.append(SUBMIT);

  return FORM
}

export default Form
