import { useContext } from "react"
import { ProjectContext } from "../../context/projects/ProjectContext"
import { useForm } from "../../hooks/useForm"
import { types } from "../../types"
import { v4 as uuidv4 } from 'uuid';

export const NewProject = () => {

    const {state, dispatch} = useContext(ProjectContext)

    const [values, handleInputChange, handleReset] = useForm({name: ""})

    const formActive = (value) => {
        dispatch({type: types.form_active, payload: {
            form: value
        }})
    }

    const handleProject = (e) => {
        e.preventDefault();
        if(values.name.length < 5){
            dispatch({type: types.form_validate, payload: true})
            setTimeout(() => {
                dispatch({type: types.form_validate, payload: false})
            }, 1500);
            return;
        }
        dispatch({type: types.add_project, payload: {
            project: {id: uuidv4(), name: values.name}
        }})
        handleReset("name")
        formActive(false)
    }

    return (
        <>
        <button
            type="button"
            className="btn btn-primario btn-block"
            onClick={() => formActive(true)}
        >New project</button>
        {
            state.form &&
            <form className="formulario-nuevo-proyecto" onSubmit={handleProject}>
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Project name"
                    name="name"
                    autoComplete="off"
                    value={values.name}
                    onChange={handleInputChange}
                />
                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Add project"
                />
            </form>
        }
        {state.form_err_validate && 
        <p className="mensaje error">The project name is invalid</p>}
        </>
    )
}
