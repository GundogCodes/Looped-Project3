import LoginForm from "./components/loginForm/loginForm"
import NavBar from "./components/NavBar/NavBar"
import routes from './router/router';

export default function App(props){
    return(
        <div>
        <NavBar routes={routes} />    
        <LoginForm />
        </div>
    )
}