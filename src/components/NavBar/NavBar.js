import styles from './NavBar.module.scss'
import { Router, Routes, Link } from 'react-router-dom'



const NavBar = props => {
  return (
    <div>

      <nav className={styles.NavBar}>
        <h1>Looped</h1>

        <div className={styles.center}>
          {props.routes.map(({ key, path }) => (
            <div className={styles.links}>

              <Link key={key} to={path}>
                {key}
              </Link>
            </div>
          ))}
        </div>

        <h1 className={styles.questionMark}>?</h1>
      </nav>

    </div>
  )
}

export default NavBar
