import LoginForm from "./components/loginForm/loginForm"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/footer/footer"

export default function App(){
    return(
        <div>
            <NavBar />
            <LoginForm />
            <Footer />
        </div>
    )
}