import React, {FC, useState , Suspense} from 'react'
import { ITodoType } from '../common/types/TodoType'
import LoadingModal from './common/LoadingModal';
import ConfirmDuplicateModal from './common/ConfirmDuplicateModal'
import { useTodosHook } from '../common/hooks/useTodos'
const TodoForm = React.lazy(() => import('./TodoForm'))
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
            <ConfirmDuplicateModal 
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            onClick={() => setModalIsOpen(false)} />
        </div>
    )
}

export default TodoList;
