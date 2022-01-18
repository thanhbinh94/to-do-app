import React, {FC, useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { TodoType } from '../types/TodoType'
import {TodoListType} from '../types/TodoListType'

const Todo: FC<TodoListType> = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, editTodo] = useState<TodoType>({
        id: null,
        value: ''
    });

    const submitUpdate = (todo: TodoType) => {
        const newValue = {id: todo.id, value: todo.value}
        updateTodo(edit.id, newValue)
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
        todos.map((todo: TodoType, index: number) => (
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
