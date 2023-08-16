import styles from './LoginForm.module.scss'
import Footer from '../footer/footer'
import useState from 'react'
export default function LoginForm () {

  return (
    <div className={styles.loginDiv}>
        
      <div className={styles.modal}>
        <div className={styles.loginSide}>

          <h1 className={styles.loginText}>Looped</h1>
         
        </div>
        <form className={styles.loginForm}>

          <p className={styles.text}>Username </p><input type='text' className={styles.inputText} />
          <p className={styles.text}>Password </p><input type='text ' className={styles.inputText} />

          <input type='submit' value='Login' className={styles.submit} />
        </form>
      </div>
      <Footer />
    </div>
  )
}
