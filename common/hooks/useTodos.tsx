import React from 'react'
import { ITodoType } from '../types/TodoType'
import { ITodoTypeStore } from '../types/TodoTypeStore'
import { addTodoAction } from '../actions/addTodoAction'
import { completeTodoAction } from '../actions/completeTodo'
import { removeTodoAction } from '../actions/removeTodo'
import { updateTodoAction } from '../actions/updateTodo'

export const useTodosHook = (store: ITodoTypeStore) => {
    const addTodo = React.useCallback(
        (currentTodo: ITodoType) => {
            addTodoAction(store, currentTodo)
        },
        [store.todos, store.setTodos],
    )

    const completeTodo = React.useCallback(
        (currentId: ITodoType['id']) => {
            completeTodoAction(store, currentId)
        },
        [store.todos, store.setTodos]
    )

    const removeTodo = React.useCallback(
        (currentId: ITodoType['id']) => {
            removeTodoAction(store, currentId)
        },
        [store.todos, store.setTodos]
    )

    const updateTodo = React.useCallback(
        (currentTodo: ITodoType) => {
            updateTodoAction(store, currentTodo.id, currentTodo)
        },
        [store.todos, store.setTodos]
    )
    
    return {
        store,
        addTodo,
        completeTodo,
        removeTodo,
        updateTodo
    }
}