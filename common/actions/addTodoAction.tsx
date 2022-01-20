import { ITodoType } from '../types/TodoType'
import { ITodoTypeStore } from '../types/TodoTypeStore'

type AddTodoStore = Pick<ITodoTypeStore, 'todos' | 'setTodos'>

export const addTodoAction = (store: AddTodoStore, nextTodo: ITodoType) => {
    const { todos, setTodos } = store
    const newTodos = [nextTodo, ...todos]
    if (!nextTodo.value || /^\s*$/.test(nextTodo.value)) {
        return
    }

    if (newTodos.length !== 0) {
        let i = 1
        while (i < newTodos.length) {
            if (newTodos[i].value === nextTodo.value) {
                // Todo: set model open
                //setModalIsOpen(true)
            }
            i++
        }
    }
    setTodos(newTodos)
}
