import { createContext, useReducer } from "react";
import { projectReducer } from "./projectReducer";

export const ProjectContext = createContext();

export const initialProjects = [
    {id: 1, name: "Tienda virtual"},
    {id: 2, name: "Sitio web personal"},
    {id: 3, name: "App movil"},
    {id: 4, name: "App web"}
]

export const ProjectProvider = ({children}) => {
    
    const initialState = {
        form: false,
        form_err_validate: false,
        projects: [],
        project_active: null
    }
    
    const [state, dispatch] = useReducer(projectReducer, initialState)

    return(
        <ProjectContext.Provider value={{state, dispatch}}>
            {children}
        </ProjectContext.Provider>
    )
}