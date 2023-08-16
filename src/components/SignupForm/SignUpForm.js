import styles from './SignUpForm.module.scss'
export default function SignUp(){
    return(
        <div>
            <form className={styles.signUpForm}>

                <p className={styles.text}>Username </p><input type='text' className={styles.username} />
                <p className={styles.text}>email </p><input type='text' className={styles.email} />
                <p className={styles.text}>Password </p><input type='text ' className={styles.password} />

                <input type='submit' value='Login' className={styles.createAccountButton} />
            </form>
        </div>
    )
}