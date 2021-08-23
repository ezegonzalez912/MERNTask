import { types } from "../../types";

export const projectReducer = (state, action) => {
    switch(action.type){
        case types.form_active:
            return {...state, form: action.payload.form}
            case types.form_validate:
                return {...state, form_err_validate: action.payload}
        case types.get_projects:
            return {...state, projects: action.payload.projects}
        case types.add_project:
            return {...state, projects: [...state.projects, action.payload.project]}
            case types.remove_project:
                return {...state, projects: state.projects.filter(project => project.id !== action.payload.id)}
        case types.project_active:
            return {...state, project_active: action.payload.project}
        default:
            return state;
    }
}