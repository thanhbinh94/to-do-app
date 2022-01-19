export type TodoInputType = {
    valueInput: string
    isEdit: boolean
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    handleSubmit: React.FormEventHandler<HTMLButtonElement>
    ref: React.RefObject<HTMLInputElement>
}