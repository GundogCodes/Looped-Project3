import { useState } from 'react'
import routes from '../../router/routes'
import NavBar from '../../components/NavBar/NavBar'
export default function About (props) {
  return (
    <div className='AboutPage'>
      <NavBar routes={routes} />
    </div>
  )
}
