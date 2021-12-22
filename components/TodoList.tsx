import React, {FC, useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import Modal from 'react-modal';
import { TodoObj } from './TodoObj'

const TodoList: FC = () => {
    const [todos, setTodos] = useState<TodoObj[]>([]);

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const addTodo = (todo: TodoObj) => {
        const newTodos = [todo, ...todos]
        
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        if (newTodos.length !== 0) {
            var i = 1
            while (i < newTodos.length) {
                if (newTodos[i].text === todo.text) {
                    setModalIsOpen(true);
                }
                i++;
            }
        }
        setTodos(newTodos)
    };

    const updateTodo = (todoId: number | null, newValue: {id: number | null, text: string}) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = (id: number | null) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };

    const completeTodo = (id: number | null) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>What's the task for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo}
                removeTodo={removeTodo} updateTodo={updateTodo} />
            <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h2>Ooops!</h2>
                <p>It's look like you already add this task...</p>
                <button onClick={() => setModalIsOpen(false)}>I Know</button>
            </Modal>
        </div>
    )
}

export default TodoList;
