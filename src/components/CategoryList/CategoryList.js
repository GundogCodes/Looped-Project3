import styles from './CategoryList.module.scss'

export default function CategoryList({categories, activeCat, setActiveCat}){
    const cats = categories.map(cat =>
        <li
        key={cat}
        className={cat===activeCat? styles.active:''}
        onClick={()=> setActiveCat(cat)}
        >
            {cat}
            <p>____________________</p>
        </li>
        )
        return (
            <>
            <h1 className={styles.title}>Looped</h1>
            <ul className={styles.CategoryList}>
                {cats}
                
            </ul>
            </>
        )
}