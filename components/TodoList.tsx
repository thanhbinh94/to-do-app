import React, {FC, useState , Suspense} from 'react'
import Modal from 'react-modal';
import { TodoType } from '../types/TodoType'
import LoadingModal from './LoadingModal';
// import TodoForm from './TodoForm'
// import Todo from './Todo';
const TodoForm = React.lazy(() => import('./TodoFormComponents/TodoForm'))
const Todo = React.lazy(() => import('./Todo'))

const TodoList: FC = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const addTodo = (todo: TodoType) => {
        const newTodos = [todo, ...todos]
        
        if (!todo.value || /^\s*$/.test(todo.value)) {
            return;
        }
        if (newTodos.length !== 0) {
            var i = 1
            while (i < newTodos.length) {
                if (newTodos[i].value === todo.value) {
                    setModalIsOpen(true);
                }
                i++;
            }
        }
        setTodos(newTodos)
    };

    const updateTodo = (todoId: number | null, newValue: {id: number | null, value: string}) => {
        if (!newValue.value || /^\s*$/.test(newValue.value)) {
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
            <Suspense fallback={LoadingModal} >
                <TodoForm onSubmit={addTodo} />
                <Todo todos={todos} completeTodo={completeTodo}
                    removeTodo={removeTodo} updateTodo={updateTodo} />
            </Suspense>
            <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h2>Ooops!</h2>
                <p>It's look like you already add this task...</p>
                <button onClick={() => setModalIsOpen(false)}>I Know</button>
            </Modal>
        </div>
    )
}

export default TodoList;
