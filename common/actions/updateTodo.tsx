import { ITodoType } from '../types/TodoType'
import { ITodoTypeStore } from '../types/TodoTypeStore'

type UpdateTodoStore = Pick<ITodoTypeStore, 'todos' | 'setTodos'>

export const updateTodoAction = (
    store: UpdateTodoStore,
    activeId: ITodoType['id'],
    newTodo: ITodoType
) => {
    const { todos, setTodos } = store
    if (!newTodo.value || /^\s*$/.test(newTodo.value)) {
        return
    }
    const updatedTodos = todos.map(item => (item.id === activeId ? newTodo : item))
    setTodos(updatedTodos)
}
