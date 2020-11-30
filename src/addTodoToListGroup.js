const addTodoToListGroup = (todo) => {

  console.log('in addTodoToListGroup');
  const accordionBody = document.querySelector('.accordion-body');
  const ul = accordionBody.querySelector('.list-group');

  const LI = document.createElement('LI');
  LI.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

  // const CHECKBOX = document.createElement('DIV');
  // CHECKBOX.classList.add('form-check');
  const checkboxINPUT = document.createElement('INPUT');
  checkboxINPUT.classList.add('form-check-input', 'my-0');
  checkboxINPUT.setAttribute('type', 'checkbox');
  checkboxINPUT.setAttribute('value', '');
  checkboxINPUT.id = 'completed';
  // CHECKBOX.append(checkboxINPUT);

  const TITLE = document.createElement('H6');
  let color;
  if (todo['priority'] == '4' || todo['priority'] == '5') {
    color = 'text-danger';
  }
  else if (todo['priority'] == '3') {
    color = 'text-warning'
  }
  else {
    color = 'text-success'
  }
  TITLE.classList.add('my-0', color, 'text-capitalize');
  TITLE.textContent = todo['title'];

  const DUEDATE = document.createElement('P');
  DUEDATE.classList.add('fs-6', 'my-0', 'text-black-50', 'fw-light');
  DUEDATE.textContent = todo['dueDate'];

  const A = document.createElement('A');
  A.classList.add('btn', 'btn-sm', 'btn-outline-dark');
  A.setAttribute('tabindex', '0');
  A.setAttribute('role', 'button');
  A.setAttribute('data-toggle', 'popover');
  A.setAttribute('data-trigger', 'focus');
  A.setAttribute('title', todo['description']);
  A.setAttribute('data-content', todo['notes']);
  A.textContent = 'notes';

  const imgANCHOR = document.createElement('A');
  imgANCHOR.classList.add('btn');
  const IMG = document.createElement('IMG');
  IMG.src = './assets/img/trash.svg';
  IMG.height = '16';
  IMG.weight = '16';
  imgANCHOR.append(IMG)

  LI.append(checkboxINPUT, TITLE, DUEDATE, A, imgANCHOR);

  ul.append(LI);

}

export default addTodoToListGroup
