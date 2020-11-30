import FormLabel from './formHelpers/FormLabel'
import FormInput from './formHelpers/FormInput'
import FormHelp from './formHelpers/FormHelp'
import FormTextarea from './formHelpers/FormTextarea'
import FormSwitch from './formHelpers/FormSwitch'
import { data } from './formHelpers/formData'

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

  // const SWITCH = FormSwitch();

  const SUBMIT = document.createElement('BUTTON');
  SUBMIT.classList.add('btn', 'btn-primary');
  SUBMIT.setAttribute('type', 'submit');
  SUBMIT.textContent = 'Create';

  FORM.append(SUBMIT);

  return FORM
}

export default Form
