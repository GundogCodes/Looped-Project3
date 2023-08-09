import styles from './LoginForm.module.scss'

export default function LoginForm(){
    return(
        <div className={styles.loginDiv}>
            <div className={styles.modal}>

        <h1 className={styles.loginText}>Looped</h1>
        <form className={styles.loginForm}>
            
            <p className={styles.text}>Username: </p><input type="text" className={styles.inputText}></input>
            <p className={styles.text}>Password: </p><input type="text "className={styles.inputText}></input>
       
       
            <input type="submit" value="Login" className={styles.submit}></input>
        </form>
            </div>
           
        </div>
    )
}
