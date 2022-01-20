import {ITodoType} from './TodoType'

export type IActionType = {
    edit?: {
        id: number | null,
        value: string
    } | null
    onSubmit: (todo: ITodoType) => void
}