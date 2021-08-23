import React, { useContext } from 'react'
import { ProjectContext } from '../../context/projects/ProjectContext'
import { TasksContext } from '../../context/tasks/TasksContext'
import { types } from '../../types'
import { Task } from './Task'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const ListTask = () => {

    const {state, dispatch} = useContext(ProjectContext);
    const {tasks} = useContext(TasksContext);

    const {project_active: project} = state;

    const removeProject = () => {
        dispatch({type: types.remove_project, payload: {id: project.id}})
        dispatch({type: types.project_active, payload: {project: null}})
    }

    return (
        <>
            {project ? <>
                <h2>Project: {project.name}</h2>
                <ul className="listando-tareas">
                    {
                        tasks.tasks_active.length === 0 ? <li>I dont have task</li>
                        : 
                        <TransitionGroup>
                            {tasks.tasks_active.map(task => (
                                <CSSTransition 
                                    key={task.id} 
                                    timeout={500}
                                    classNames="item"
                                >
                                    <Task task={task} />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    }
                </ul>
                <button 
                    className="btn btn-eliminar" 
                    onClick={removeProject}
                >Remove project</button>
            </>
            : <h2>select a project</h2>
            }
        </>
    )
}
