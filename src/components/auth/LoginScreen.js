import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const [values, handleInputChange] = useForm({
        email:"",
        password:""
    })

    const {email, password} = values;

    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={handleInputChange}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your email"
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={handleInputChange}
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Your password"
                        />
                    </div>
                    <div className="campo-form">
                        <button type="submit" className="btn btn-primario btn-block">
                            Login
                        </button>
                    </div>
                </form>
                <Link className="enlace-cuenta" to="register">Register</Link>
            </div>
        </div>
    )
}
