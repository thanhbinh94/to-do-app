import { ITodoType } from "./TodoType"

export type ITodoTypeStore = {
    todos: ITodoType[]
    setTodos(todos: ITodoType[]): void
}