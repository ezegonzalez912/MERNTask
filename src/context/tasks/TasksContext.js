import { createContext, useReducer } from "react";
import { tasksReducer } from "./tasksReducer";

export const TasksContext = createContext();

const initialState = {
    tasks: [
        {id: 1, projectId: 1, name: "Elegir plataforma", state: false},
        {id: 2, projectId: 3, name: "Elegir color", state: true},
        {id: 3, projectId: 3, name: "Cambiar posicion", state: true},
        {id: 4, projectId: 2, name: "Ir al norte", state: true},
        {id: 5, projectId: 1, name: "Modo nocturno", state: false},
        {id: 6, projectId: 3, name: "Elegir plataforma", state: false},
        {id: 7, projectId: 4, name: "Elegir plataforma", state: true}
    ],
    tasks_active: [],
    task_validate: false,
    task_active: null
}

export const TasksProvider = ({children}) => {

    const [tasks, dispatch] = useReducer(tasksReducer, initialState);

    return(
        <TasksContext.Provider value={{tasks, dispatch}}>
            {children}
        </TasksContext.Provider>
    )
}