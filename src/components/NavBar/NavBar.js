
import styles from './NavBar.module.scss'

export default function NavBar(){
    return(
        <div className={styles.navBar} >
           <h1 className={styles.title}> Looped</h1>

           <div className={styles.center}>

            <h3 className={styles.products}>About</h3>
            <h3 className={styles.discover}>Home</h3>
            <h3 className={styles.shop}>Contact</h3>
           
           </div>
           <h1 className={styles.questionMark}>?</h1>
        </div>
    )
}
