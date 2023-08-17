import styles from './NavBar.module.scss'
import { Router, Routes, Link } from 'react-router-dom'



const NavBar = props => {
  return (
    <div>

      <nav className={styles.NavBar}>
        <h1>Looped</h1>

        <div className={styles.center}>
            <Link to='/about' key="About">About</Link>
            <Link to='/contact' key ="Contact">Contact</Link>
            <Link></Link>
        </div>

        <h1 className={styles.questionMark}>?</h1>
      </nav>

    </div>
  )
}

export default NavBar

