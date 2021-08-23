import { useContext } from "react"
import { ProjectContext } from "../../context/projects/ProjectContext"
import { TasksContext } from "../../context/tasks/TasksContext"
import { useTask } from "../../hooks/useTask"
import { types } from "../../types"

export const Project = ({project}) => {
    
    const {dispatch} = useContext(ProjectContext)
    const {tasks, dispatch: tasksDispatch} = useContext(TasksContext);
    const {taskActive} = useTask(tasks.task_active)

    const activeProject = () => {
        dispatch({type: types.project_active, payload: {
            project: project
        }})
        tasksDispatch({type: types.tasks_project, payload: {idProject: project.id}})
        taskActive()
    }

    return (
        <li>
           <button
            type="button"
            className="btn btn-blank"
            onClick={activeProject}
           >{project.name}</button> 
        </li>
    )
}
