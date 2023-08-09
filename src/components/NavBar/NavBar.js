import styles from './NavBar.module.scss'

export default function NavBar(){
    return(

        <div className={styles.navBar} >
           <h1 className={styles.title}> Looped</h1>
            <h3 className={styles.products}>Products</h3>
            <h3 className={styles.discover}>Discover</h3>
            <h3 className={styles.shop}>Shop</h3>
           <h1 className={styles.questionMark}>?</h1>
        </div>
    )
}