import styles from './NavBar.module.scss'

export default function NavBar(){
    return(
        <div className={styles.navBar} >
           <h1>Site Title</h1>
            <h3>Products</h3>
            <h3>Discover</h3>
            <h3>Shop</h3>
           <h1>?</h1>
           
        </div>
    )
}