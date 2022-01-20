import { ITodoType } from "./TodoType"

export type ITodoListType = {
    todos: Array<ITodoType>
    addTodo?: (id: number | null, value: {id: number | null, value: string}) => void
    completeTodo: ( id: number | null) => void,
    removeTodo: ( id: number | null) => void
    updateTodo: (currentTodo: ITodoType) => void
}