import { handleCheckedTodo, handleDeleteTodo } from './handlerHelpers'

const addCheckboxListeners = (todo, oldTodos) => {

  const li = document.getElementById(`${todo.id}`);
  const checkbox = li.querySelector('INPUT');

  checkbox.addEventListener('click', event => {
    handleCheckedTodo(event);
    const id = event.target.parentNode.id;
    const todo = oldTodos.find(el => el.id == id)
    todo.completed == false ? todo.completed = true : todo.completed = false ;
  });

}

const addTrashBtnListeners = (todo, oldTodos, myStorage) => {

  const li = document.getElementById(`${todo.id}`);
  const trashBtn = li.querySelector('.trash');

  trashBtn.addEventListener('click', event => {
    let id;
    event.target.tagName == 'A' ?
      id = event.target.parentNode.id :
      id = event.target.parentNode.parentNode.id ;
    handleDeleteTodo(event);
    const todosList = oldTodos.filter(todo => todo.id !== id );
    myStorage.setItem('todos', JSON.stringify(todosList));
  });

}

export { addCheckboxListeners, addTrashBtnListeners }
