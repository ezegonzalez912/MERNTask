import { useContext } from "react"
import { TasksContext } from "../context/tasks/TasksContext"
import { types } from "../types";
import { v4 as uuidv4 } from 'uuid';
import { ProjectContext } from "../context/projects/ProjectContext";

export const useTask = (task) => {

    const {tasks, dispatch} = useContext(TasksContext);
    const {state} = useContext(ProjectContext)

    const removeTask = () => {
        dispatch({type: types.task_remove, payload: {id: task.id}})
        dispatch({type: types.tasks_project, payload: {idProject: task.projectId}})
    }

    const completedTask = () => {
        dispatch({type: types.task_completed, payload: {id: task.id}})
        dispatch({type: types.tasks_project, payload: {idProject: task.projectId}})
    }

    const taskActive = (taskParams= null) => {
        dispatch({type: types.task_active, payload: {task: taskParams}})
    }

    const taskValidate = (state) => {
        dispatch({type: types.task_validate, payload: {state: state}})
    }

    const editTask = (newName) => {
        dispatch({type: types.task_edit, payload: {id: tasks.task_active.id, newName: newName}})
    }

    const addTask = (nameTask) => {
        dispatch({type: types.task_add, payload: {
            newTask: {id: uuidv4(), projectId: state.project_active.id, name: nameTask, state: false}
        }})
    }

    const tasksActiveReload = () => {
        dispatch({type: types.tasks_project, payload: {idProject: state.project_active.id}})
    }

    return {removeTask, completedTask, taskActive, taskValidate, editTask, addTask, tasksActiveReload}
}
