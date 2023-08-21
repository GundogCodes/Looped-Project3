import styles from './LoginForm.module.scss'
import Footer from '../Footer/Footer'
import {useState} from 'react'
import * as usersService from '../../../utilities/users-service'
import { redirect } from 'react-router-dom'

export default function LoginForm ({setUser}) {
    const [credentials,setCredentials] = useState({
        email:'',
        password:''
    })
    const [error,setError] = useState('')

    function handleChange(evt){
        setCredentials({...credentials,[evt.target.name]:evt.target.value})
        setError('')
    }
    async function handleSubmit(evt){
        evt.preventDefault()
        try {
            const user = await usersService.login(credentials)

            setUser(user)
           
        } catch (error) {
            setError('Log In Failed - Try Again')
        }
    }

  return (
    <div className={styles.loginDiv}>
        
      <div className={styles.modal}>
        <div className={styles.loginSide}>

          <h1 className={styles.loginText}>Looped</h1>
          <h3 className={styles.slogan}>Creating Tomorrow, Today.</h3>
         
        </div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>

          <p className={styles.text}>Email </p><input type='text' name="email" value={credentials.email} className={styles.inputText}  onChange={handleChange} required/>
          <p className={styles.text}>Password </p><input type='password' name="password" value={credentials.password} onChange={handleChange} className={styles.inputText} required />
        
          <button type='submit'className={styles.submit} >LOG IN</button>
        </form>
        <p className='error-message'>&nbsp;{error}</p>
      </div>
      <Footer />
    </div>
  )
}
