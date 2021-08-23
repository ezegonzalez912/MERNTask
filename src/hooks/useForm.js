import { useState } from "react"

export const useForm = ( initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleReset = (name, value = "") => {
        setValues({
            ...values,
            [name]: value
        })
    }

    return [values, handleInputChange, handleReset];
}