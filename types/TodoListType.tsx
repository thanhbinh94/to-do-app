import { TodoType } from "./TodoType"

export type TodoListType = {
    todos: Array<TodoType>
    completeTodo: ( id: number | null) => void,
    removeTodo: ( id: number | null) => void
    updateTodo: (id: number | null, value: {id: number | null, value: string}) => void
}