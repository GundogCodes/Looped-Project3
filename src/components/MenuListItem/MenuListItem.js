import styles from './MenuListItem.module.scss'

export default function MenuListItem({menuItem, handleAddToOrder}){
    return(
        <div className={styles.MenuListItem}>
            <div className={styles.imageUrl +' '+ 'flex-ctr-ctr'}>{menuItem.imageUrl}</div>
            <div className={styles.name}>{menuItem.name}</div>
            <div className={styles.buy}></div>
            <span>${menuItem.price.toFixed(2)}</span>
            <button className={styles.btnsm} onClick={()=>handleAddToOrder(menuItem._id)}>+</button>
        </div>
    )
}