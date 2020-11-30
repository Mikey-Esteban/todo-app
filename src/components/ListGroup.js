const ListGroup = () => {

  const todosList = [
    { 'priority': '3' }
  ]

  const UL = document.createElement('UL');
  UL.classList.add('list-group');

  const LI = document.createElement('LI');
  LI.classList.add('list-group-item');

  for (let todo of todosList) {
    console.log(todo);
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
    A.setAttribute('title', 'Dismissible popover');
    A.setAttribute('data-content', 'and heres some engagin content');
    A.textContent = 'Dismissible popover';
    LI.append(A);
  }

  UL.append(LI);

  return UL
}

export default ListGroup
