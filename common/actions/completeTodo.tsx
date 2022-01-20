import { ITodoType } from '../types/TodoType'
import { ITodoTypeStore } from '../types/TodoTypeStore'

type CompleteTodoStore = Pick<ITodoTypeStore, 'todos' | 'setTodos'>

export const completeTodoAction = (store: CompleteTodoStore, activeId: ITodoType['id']) => {
    const { todos, setTodos } = store
    let updatedTodos = todos.map(todo => {
        if (todo.id === activeId) {
            todo.isComplete = !todo.isComplete
        }
        return todo
    })
    setTodos(updatedTodos)
}
