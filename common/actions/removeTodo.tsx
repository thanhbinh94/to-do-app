import { ITodoType } from '../types/TodoType'
import { ITodoTypeStore } from '../types/TodoTypeStore'

type RemoveTodoStore = Pick<ITodoTypeStore, 'todos' | 'setTodos'>

export const removeTodoAction = (store: RemoveTodoStore, removeId: ITodoType['id']) => {
    const { todos, setTodos } = store
    const removeArr = [...todos].filter(todo => todo.id !== removeId)

    setTodos(removeArr)
}
