import React from "react"
import TodoItem from "./TodoItem"
import styled from "styled-components"
import TodoInputType from "../../../types/TodoInputType"

const InputForm = styled.from
`
    margin-bottom: 32px;
`

const TodoFormItem: React.FC<TodoInputType> = ({valueInput, isEdit, handleChange, handleSubmit, ref}) => {
    return<>
    (
        <InputForm onSubmit={handleSubmit}>
            <TodoItem valueInput={valueInput} isEdit={isEdit} handleChange={handleChange} handleSubmit={handleSubmit} ref={ref} />
        </InputForm>
    )
    </>
}

export default TodoFormItem