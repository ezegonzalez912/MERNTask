import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

    const [values, handleInputChange] = useForm({
        name:"",
        email:"",
        password:"",
        confirmPass:""
    })

    const {name, email, password, confirmPass} = values;

    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Register</h1>
                <form onSubmit={handleLogin}>
                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input
                            value={name}
                            onChange={handleInputChange}
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your name"
                        />
                    </div>
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
                            id="confirmar"
                            type="password"
                            name="password"
                            placeholder="Your password"
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Confirm password</label>
                        <input
                            value={confirmPass}
                            onChange={handleInputChange}
                            id="password"
                            type="password"
                            name="confirmPass"
                            placeholder="Confirm password"
                        />
                    </div>
                    <div className="campo-form">
                        <button type="submit" className="btn btn-primario btn-block">
                            Register
                        </button>
                    </div>
                </form>
                <Link className="enlace-cuenta" to="/login">I have account</Link>
            </div>
        </div>
    )
}
