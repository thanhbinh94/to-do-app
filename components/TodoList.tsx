import React, {FC, useState , Suspense} from 'react'
import Modal from 'react-modal';
import { ITodoType } from '../common/types/TodoType'
import LoadingModal from './LoadingModal';
import { useTodosHook } from '../common/hooks/usetodos'
// import TodoForm from './TodoForm'
// import Todo from './Todo';
const TodoForm = React.lazy(() => import('./TodoFormComponents/TodoForm'))
const Todo = React.lazy(() => import('./Todo'))

const TodoList: FC = () => {
    const [todos, setTodos] = useState<ITodoType[]>([]);

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const {store, addTodo, completeTodo, removeTodo, updateTodo} = useTodosHook({todos, setTodos})

    return (
        <div>
            <h1>What's the task for Today?</h1>
            <Suspense fallback={LoadingModal} >
                <TodoForm onSubmit={addTodo} />
                <Todo todos={store.todos} completeTodo={completeTodo}
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
