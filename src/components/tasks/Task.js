import React from 'react'
import { useTask } from '../../hooks/useTask';

export const Task = ({task}) => {

    const {removeTask, completedTask, taskActive} = useTask(task);

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                <button 
                    className={task.state ? "completo" : "incompleto"} 
                    onClick={completedTask}
                >
                    {task.state ? "completo" : "incompleto"}
                </button>
            </div>
            <div className="acciones">
                <button className="btn btn-primario" onClick={() => taskActive(task)}>Edit</button>
                <button className="btn btn-primario" onClick={removeTask}>Remove</button>
            </div>
        </li>
    )
}
