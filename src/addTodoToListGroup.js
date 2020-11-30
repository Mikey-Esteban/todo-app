const addTodoToListGroup = (todo) => {

  console.log('in addTodoToListGroup');
  const accordionBody = document.querySelector('.accordion-body');
  const ul = accordionBody.querySelector('.list-group');

  const LI = document.createElement('LI');
  LI.classList.add('list-group-item');

  const A = document.createElement('A');
  let color;
  todo['priority'] == '5' ?
    color = 'btn-danger' :
    color = 'btn-success' ;
  A.classList.add('btn', 'btn-lg', color);
  A.setAttribute('tabindex', '0');
  A.setAttribute('role', 'button');
  A.setAttribute('data-toggle', 'popover');
  A.setAttribute('data-trigger', 'focus');
  A.setAttribute('title', todo['dueDate']);
  A.setAttribute('data-content', todo['description']);
  A.textContent = todo['title'];
  LI.append(A);

  ul.append(LI);

}

export default addTodoToListGroup
