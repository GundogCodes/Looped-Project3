import { useState } from 'react'
import routes from '../../router/routes'
import NavBar from '../../components/NavBar/NavBar'
import styles from './ContactPage.module.scss'
export default function Contact (props) {
  return (
    <div className={styles.ContactPage}>
      <NavBar routes={routes} />
      <body>

        <h1 className={styles.contactText}>
          Company Name: Looped Automotive Technologies
          Website: www.loopedautomotive.com
          Email: info@loopedautomotive.com
          Phone: 1-800-555-LOOP
          Address: 1234 Tech Drive, Innovation City, CA 12345
          Social Media: @LoopedAutomotive

        </h1>
        <img src='https://www.gifcen.com/wp-content/uploads/2022/09/3d-car-gif-8.gif' />
      </body>
    </div>
  )
}
