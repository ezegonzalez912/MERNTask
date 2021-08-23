import { useContext, useEffect } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { initialProjects, ProjectContext } from "../../context/projects/ProjectContext";
import { types } from "../../types";
import { Project } from "./Project"

export const ListProjects = () => {

    const {state, dispatch} = useContext(ProjectContext);

    useEffect(() => {
        dispatch({
            type: types.get_projects, 
            payload: {
                projects: initialProjects
            }
        })
    }, [dispatch])
    
    const {projects} = state;

    return (
        <>
        {
            projects.length===0 ?
            <ul>I dont projects</ul>
            :
            <ul className="listado-proyectos">
                <TransitionGroup>
                {
                    projects.map( project => (
                        <CSSTransition key={project.id} timeout={400} className="item">
                            <Project project={project}/>
                            </CSSTransition>
                ))
                }
                </TransitionGroup>
            </ul>
        }
        </>
    )
}
