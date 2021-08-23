import { useContext, useEffect } from "react"
import { ProjectContext } from "../../context/projects/ProjectContext"
import { TasksContext } from "../../context/tasks/TasksContext"
import { useForm } from "../../hooks/useForm";
import { useTask } from "../../hooks/useTask";

export const TaskForm = () => {

    const {state} = useContext(ProjectContext)
    const {tasks} = useContext(TasksContext)

    const {project_active} = state;

    const [values, handleInputChange, handleReset] = useForm({name: ""})

    useEffect(() => {
        if(tasks.task_active !== null){
            handleReset("name", tasks.task_active.name)
        }
        //eslint-disable-next-line
    }, [tasks.task_active])

    const {taskActive, taskValidate, editTask, addTask, tasksActiveReload} = useTask(tasks.task_active);
    
    const handleTask = (e) => {
        e.preventDefault() 
        
        if(values.name.length < 4){
            taskValidate(true)
            setTimeout(() => {
                taskValidate(false)
            }, 1500);
            return;
        }

        if(tasks.task_active !==null){
            editTask(values.name)
        }else{
            addTask(values.name)
        }

        tasksActiveReload()
        taskActive()
        handleReset("name")
    }
    
    if(!project_active) return null;

    return (
        <div className="formulario">
            <form onSubmit={handleTask}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Name task"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value={tasks.task_active ? "Edit task" : "Add task"}
                    />
                </div>
            </form>
            {tasks.task_validate && <p className="mensaje error">the task name is invalid</p>}
        </div>
    )
}
