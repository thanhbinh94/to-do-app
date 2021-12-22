import React, {FC, useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { TodoObj } from './TodoObj'

type ToDoEdited ={
    id: number | null,
    value: string
}

type Todos = {
    todos: Array<TodoObj>
    completeTodo: ( id: number | null) => void,
    removeTodo: ( id: number | null) => void
    updateTodo: (id: number | null, value: {id: number | null, text: string}) => void
}

const Todo: FC<Todos> = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, editTodo] = useState<ToDoEdited>({
        id: null,
        value: ''
    });

    const submitUpdate = (todo: TodoObj) => {
        const newValue = {id: todo.id, text: todo.text}
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
        todos.map((todo: TodoObj, index: number) => (
            <div 
                className={todo.isComplete ? 'todo-row complete': 'todo-row'} 
                key={index}>
                    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                        {todo.text}
                    </div>
                    <div className="icons">
                        <RiCloseCircleLine
                            onClick={() => removeTodo(todo.id)} className="delete-icon" />
                        <TiEdit
                            onClick={() => editTodo({ id: todo.id, value: todo.text })} className="edit-icon" />
                    </div>
            </div>
        ))   
    }
    </>
}

export default Todo
