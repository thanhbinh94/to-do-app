import {TodoType} from './TodoType'

export type ActionType = {
    edit?: {
        id: number | null,
        value: string
    } | null
    onSubmit: (todo: TodoType) => void
}