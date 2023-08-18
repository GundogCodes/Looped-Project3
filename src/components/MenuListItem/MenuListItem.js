import styles from './MenuListItem.module.scss'

export default function MenuListItem({menuItem, handleAddToOrder}){
    return(
        <div className={styles.MenuListItem}>
            <div className={styles.emoji +' '+ 'flex-ctr-ctr'}></div>
            <div className={styles.name}></div>
            <div className={styles.buy}></div>
            <span>$</span>
            <button className='btn-sm' >ADD</button>
        </div>
    )
}