import {createContext, useContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "my todo",
            completed: false
        }
    ],
    addTodo: (todo) => {
    },
    updateTodo: (id, todo) => {
    },
    deleteTodo: (id) => {
    },
    toggoleComplete: (id) => {
    }

})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}