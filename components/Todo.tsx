import React, {FC, useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { ITodoType } from '../common/types/TodoType'
import {ITodoListType} from '../common/types/TodoListType'

const Todo: FC<ITodoListType> = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, editTodo] = useState<ITodoType>({
        id: null,
        value: ''
    });

    const submitUpdate = (updatedTodo: ITodoType) => {
        updateTodo(updatedTodo)
        editTodo({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <><TodoForm edit={edit} onSubmit={submitUpdate} /></>;
    }

    return <>
    {
        todos.map((todo: ITodoType, index: number) => (
            <div 
                className={todo.isComplete ? 'todo-row complete': 'todo-row'} 
                key={index}>
                    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                        {todo.value}
                    </div>
                    <div className="icons">
                        <RiCloseCircleLine
                            onClick={() => removeTodo(todo.id)} className="delete-icon" />
                        <TiEdit
                            onClick={() => editTodo({ id: todo.id, value: todo.value })} className="edit-icon" />
                    </div>
            </div>
        ))   
    }
    </>
}

export default Todo
