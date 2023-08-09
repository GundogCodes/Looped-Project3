import styles from './LoginForm.module.scss'

export default function LoginForm(){
    return(
        <div className={styles.loginDiv}>
        <h1 className={styles.loginText}>Please Login</h1>
        <form className={styles.loginForm}>
            Username: <input type="text" className={styles.inputText}></input>
            Password: <input type="text "className={styles.inputText}></input>
            <input type="submit" value="Login" className={styles.submit}></input>
        </form>
        </div>
    )
}
