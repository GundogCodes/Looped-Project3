import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import NavBar from '../../components/NavBar/NavBar'
import routes from '../../router/routes'
export default function Login (props) {
  return (
    <div className='LoginPage'>
      <NavBar routes={routes} />
      <LoginForm />
    </div>
  )
}
