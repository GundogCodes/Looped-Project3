import { useState } from 'react'
import routes from '../../router/routes'
import NavBar from '../../components/NavBar/NavBar'
import styles from './ContactPage.module.scss'
import Footer from '../../components/footer/footer'
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
        <img src='https://i.pinimg.com/originals/66/00/c2/6600c2f3613c019aea6e2cf1ab22a061.gif' />
      </body>
	  <Footer />
    </div>
  )
}
