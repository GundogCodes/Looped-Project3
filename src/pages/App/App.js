import LoginForm from "../../components/LoginForm/LoginForm"
import NavBar from "../../components/NavBar/NavBar"
import routes from '../../router/routes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App(props){
    return(
        <div>
        <NavBar routes={routes} />    
        <LoginForm />
        </div>
    )
}