import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { LoginScreen } from "../components/auth/LoginScreen"
import { RegisterScreen } from "../components/auth/RegisterScreen"
import { Projects } from "../components/Projects/Projects"

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route exact path="/" component={Projects} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
