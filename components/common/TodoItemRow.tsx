import React from "react"
import styled from "styled-components"

type TodoRowType = {
    isComplete: boolean
    key?: React.Key | null
}

const StyledTodoRow = styled.div<{isComplete: boolean}>
`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px auto;
    color: #fff;
    background: rgb(36,0,31);
    background: linear-gradient(39deg, rgba(36,0,31,1) 6%, rgba(9,9,121,1) 44%, rgba(0,212,255,1) 100%);
    padding: 16px;
    border-radius: 5px;
    width: 90%;
    ${
        props => {
            if(props.isComplete){
                return "text-decoration: line-through;opacity: 0.4;"
            }
        }
    }
`

const TodoItemRow: React.FC<TodoRowType> = ({isComplete, key}) => {
    return <>
        (
            <StyledTodoRow isComplete={isComplete} key={key}>
                
            </StyledTodoRow>
        )
    </>

}

export default TodoItemRow