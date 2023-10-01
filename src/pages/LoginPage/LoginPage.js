import { useState } from 'react'
import LoginForm from '../../components/loginForm/loginForm'
import SignUpForm from '../../components/SignupForm/SignUpForm'
import styles from './LoginPage.module.scss'
import AboutPage from '../AboutPage/AboutPage'
import ContactPage from '../ContactPage/ContactPage'
export default function Login ({setUser}) {
	const [showLogin, setShowLogin] = useState(true)
	const [showAbout, setShowAbout ]= useState(false)
	const [showContact, setShowContact]= useState(false)
	const [showSignup, setShowSignup] = useState(false)

	const handleClick =(e) =>{
		let clickedNav = e.target.innerText
		console.log(e.target.innerText)
		if(clickedNav==='LOG IN'){
			setShowLogin(true)
			setShowSignup(false)
			setShowContact(false)
			setShowAbout(false)
		} else if(clickedNav==='SIGN UP'){
			setShowLogin(false)
			setShowSignup(true)
			setShowContact(false)
			setShowAbout(false)
		} else if(clickedNav==='ABOUT'){
			setShowLogin(false)
			setShowSignup(false)
			setShowContact(false)
			setShowAbout(true)
		} else if(clickedNav==='CONTACT'){
			setShowLogin(false)
			setShowSignup(false)
			setShowContact(true)
			setShowAbout(false)
		} 
	}

	return (
		<main className={styles.LoginPage}>

			<div className={styles.NavDiv}>
			<h3 onClick={handleClick}>ABOUT</h3>
			<h3 onClick={handleClick}>{showLogin?'SIGN UP':'LOG IN'}</h3>
			<h3 onClick={handleClick}>CONTACT</h3>
			</div>
			{showLogin? <LoginForm setUser={setUser}/>:<></>}
			{showSignup? <SignUpForm setUser={setUser}/>:<></>}
			{showContact? <ContactPage/>:<></>}
			{showAbout? <AboutPage/>:<></>}
		</main>
  )
}
