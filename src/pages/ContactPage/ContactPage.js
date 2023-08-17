import { useState } from 'react'
import routes from '../../router/routes'
import NavBar from '../../components/NavBar/NavBar'
import styles from './ContactPage.module.scss'
import Footer from '../../components/Footer/Footer'
export default function Contact (props) {
  return (
    <div className={styles.ContactPage}>
      <NavBar routes={routes} />
      <div className={styles.body}>

        <h1 className={styles.contactText}>
          Company Name: Looped Automotive Technologies<br/>
          Website: www.loopedautomotive.com<br/>
          Email: info@loopedautomotive.com<br/>
          Phone: 1-800-555-LOOP<br/>
          Address: 1234 Tech Drive, Innovation City, CA 12345<br/>
          Social Media: @LoopedAutomotive<br/>

        </h1>
        <img src='https://i.pinimg.com/originals/66/00/c2/6600c2f3613c019aea6e2cf1ab22a061.gif' />
      </div>
	  <Footer />
    </div>
  )
}
