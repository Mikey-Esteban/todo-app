const handleCheckedTodo = event => {

  const li = event.target.parentNode;
  const title = li.querySelector('h6');

  if (event.target.checked) {
    title.classList.add('fw-lighter', 'text-muted', 'text-decoration-line-through');
  } else {
    if (title.classList.contains('fw-lighter')) {
      title.classList.remove('fw-lighter', 'text-muted', 'text-decoration-line-through')  ;
    }
  }

}

export default handleCheckedTodo
