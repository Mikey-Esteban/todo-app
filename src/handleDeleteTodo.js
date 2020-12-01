const handleDeleteTodo = event => {

  event.target.tagName == 'A' ?
    event.target.parentNode.remove() :
    event.target.parentNode.parentNode.remove() ;

}

export default handleDeleteTodo
