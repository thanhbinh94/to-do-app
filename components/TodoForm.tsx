import React, { FC, useState, useEffect, useRef } from 'react'
import { TodoObj } from './TodoObj'

type Props = {
    edit?: {
        id: number | null,
        value: string
    } | null
    onSubmit: (todo: TodoObj) => void
}


const TodoForm: FC<Props> = ({ edit, onSubmit }) => {
    const [input, setInput] = useState<string>(edit ? edit.value : '');
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus()
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="todo-form">
                {edit ? (
                    <>
                        <input type="text"
                            placeholder="Edit a todo item"
                            value={input}
                            name="text"
                            className="todo-input edit"
                            onChange={handleChange}
                            ref={inputRef} />
                        <button  onSubmit={handleSubmit} className="todo-button">Update</button>
                    </>
                ) :
                    (
                        <>
                            <input type="text"
                                placeholder="Add a todo item"
                                value={input}
                                name="text"
                                className="todo-input"
                                onChange={handleChange}
                                ref={inputRef} />
                            <button onSubmit={handleSubmit} className="todo-button">Add todo</button>
                        </>
                    )
                }
            </form>
        </div>
    )
}

export default TodoForm;
