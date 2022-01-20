import React from "react"
import styled from "styled-components"
import {MediaQueries} from '../../../utilities/MediaQueries'
import TodoInputType from "../../../types/TodoInputType"


const InputText = styled.input<{isEdit?: boolean}>
`
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #0cffc2;
    outline: none;
    width: 320px;
    background: transparent;
    color: #fff;
    ::placeholder
    {
        color: #aa80aa;
    }
    ${props => props.isEdit?'border: 2px solid #149fff;':''}
    ${MediaQueries("md")
        `
            padding: 14px 10px 15px 10px;
            width: 250px;
        `
    }
    ${MediaQueries("sm")
        `
            padding: 14px 10px 15px 10px;
            width: 200px;
        `
    }
`

const InputButton = styled.button<{isEdit: boolean}>
`
    padding: 16px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
    );
    color: #fff;
    text-transform: capitalize;
    ${
        props => {
            if(props.isEdit)
                return `
                    background: linear-gradient(
                        90deg,
                        rgba(20, 159, 255, 1) 0%,
                        rgba(17, 122, 255, 1) 100%
                    );
                    padding: 16px 22px;
                `
        }
    }
`

const TodoItem: React.FC<TodoInputType> = ({valueInput, isEdit, handleChange, handleSubmit, ref}) => {
    const placeholderVal: string = isEdit? "Edit a todo item" : "Add a todo item";
    return<>
        (
            <InputText type="text" 
                isEdit={isEdit}
                value={valueInput} 
                name="text"
                placeholder={placeholderVal}
                onChange={handleChange}
                ref={ref}/>
            <InputButton
                value={valueInput}
                isEdit={isEdit}
                onSubmit={handleSubmit}/>
        )
    </>
}

export default TodoItem