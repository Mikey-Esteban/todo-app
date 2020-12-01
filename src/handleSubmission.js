const handleSubmission = event => {

  const form = document.querySelector(`#${event.target.id}`);
  const data = {}

  const title = form.elements['title'];
  const description = form.elements['description'];
  const dueDate = form.elements['dueDate'];
  const priority = form.elements['priority'];
  const notes = form.elements['notes'];
  const completed = false;
  data['title'] = title.value;
  data['description'] = description.value;
  data['dueDate'] = dueDate.value;
  data['priority'] = priority.value;
  data['notes'] = notes.value;
  data['completed'] = completed;
  title.value = '';
  description.value = '';
  dueDate.value = '';
  priority.value = '';
  notes.value = '';

  const closeBtn = document.querySelector('.btn-close');
  closeBtn.click();

  return data

}

export default handleSubmission
