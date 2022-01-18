import React, { FC, useState, useEffect, useRef } from 'react'
import { ActionType } from '../types/ActionType';


const TodoForm: FC<ActionType> = ({ edit, onSubmit }) => {
    const [input, setInput] = useState<string>(edit ? edit.value : '');
    const inputRef = useRef<HTMLInputElement>(null)

    if (inputRef && inputRef.current) {
        inputRef.current.focus()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            value: input
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
