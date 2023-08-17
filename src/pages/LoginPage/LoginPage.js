import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import NavBar from '../../components/NavBar/NavBar'
import routes from '../../router/routes'
import SignUpForm from '../../components/SignupForm/SignUpForm'
import styles from './LoginPage.module.scss'

export default function Login ({setUser}) {
	const [showLogin, setShowLogin] = useState(true)

	return (
		<main className={styles.LoginPage}>
			<NavBar routes={routes}/>
			<h3 onClick={()=>{setShowLogin(!showLogin)}}>{showLogin? 'SIGN UP': 'LOG IN'}</h3>
			{showLogin? <LoginForm setUser={setUser}/> : <SignUpForm setUser={setUser} />}
		</main>
  )
}
