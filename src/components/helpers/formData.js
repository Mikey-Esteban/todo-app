export const data = [
  {
    label: { value: 'title', 'text': 'Title' },
    input: { id: 'title', 'type': 'text', 'help': 'titleHelp'},
    help: { id: 'titleHelp', 'text': 'here to help' },
  },
  {
    label: { value: 'description', 'text': 'Description' },
    input: { id: 'description', 'type': 'text', 'help': 'descriptionHelp'},
    help: { id: 'descriptionHelp', 'text': 'here to help' },
  },
  {
    label: { value: 'dueDate', 'text': 'Due Date' },
    input: { id: 'dueDate', 'type': 'date', 'help': 'dueDateHelp'},
    help: { id: 'dueDateHelp', 'text': 'here to help' },
  },
  {
    label: { value: 'priority', 'text': 'Priority' },
    input: { id: 'priority', 'type': 'range', min: '1', max:'5', 'help': 'priorityHelp'},
    help: { id: 'priorityHelp', 'text': 'here to help' },

  },
  {
    label: { value: 'notes', 'text': 'Notes' },
    textarea: { id: 'notes', 'help': 'notesHelp'},
    help: { id: 'notesHelp', 'text': 'here to help' }
  }
]
