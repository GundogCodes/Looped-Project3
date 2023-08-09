import styles from './LoginForm.module.scss'

export default function LoginForm(){
    return(
        <div className={styles.loginForm}>
        <h1>Please Login</h1>
        <form className="loginForum">
            Username: <input type="text"></input>
            Password: <input type="text"></input>
            <input type="submit" value="Login"></input>
        </form>
        </div>
    )
}