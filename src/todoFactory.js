const todoFactory = (data) => {
  const { id, title, description, dueDate, priority, notes, completed } = data;

  return { id, title, description, dueDate, priority, notes, completed }

}

export default todoFactory
