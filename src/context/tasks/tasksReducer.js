import { types } from "../../types";

export const tasksReducer = (state, action) => {
    switch(action.type){
        case types.tasks_project:
            return {
                ...state, 
                tasks_active: state.tasks.filter( task => task.projectId === action.payload.idProject)
            }
        case types.task_add:
            return {
                ...state,
                tasks: [...state.tasks, action.payload.newTask]
            }
        case types.task_validate:
            return {
                ...state,
                task_validate: action.payload.state
            }
        case types.task_remove:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            }
        case types.task_completed:
            return {
                ...state,
                tasks: state.tasks.map( task => task.id === action.payload.id ? {...task, state: !task.state} : task)
            }
        case types.task_active:
            return {
                ...state,
                task_active: action.payload.task
            }
        case types.task_edit:
            return {
                ...state,
                tasks: state.tasks.map( task => task.id === action.payload.id ? {...task, name: action.payload.newName} : task )
            }
        default:
            return state
    }
}
