import styles from './LoginForm.module.scss'
import Footer from '../footer/footer'

export default function LoginForm(){
    return(
        <div className={styles.loginDiv}>
            <div className={styles.modal}>
        <div className={styles.loginSide}>

        <h1 className={styles.loginText}>Looped</h1>
        <h3 className={styles.createAccount}>Create Account</h3>
        </div>
        <form className={styles.loginForm}>
            
            <p className={styles.text}>Username </p><input type="text" className={styles.inputText }></input>
            <p className={styles.text}>Password </p><input type="text "className={styles.inputText}></input>
       
       
            <input type="submit" value="Login" className={styles.submit}></input>
        </form>
            </div>
           <Footer />
        </div>
    )
}
