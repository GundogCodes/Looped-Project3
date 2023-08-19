import styles from './MenuListItem.module.scss'

export default function MenuListItem({menuItem, handleAddToOrder}){
    return(
        <div className={styles.MenuListItem}>
            <img src={menuItem.imageUrl} alt="img" className={styles.imageUrl}/>
            <div className={styles.name}>{menuItem.name}</div>
            <div className={styles.buy}></div>
            <span>${menuItem.price.toFixed(2)}</span>
            <button className={styles.btnsm} onClick={()=>handleAddToOrder(menuItem._id)}>+</button>
        </div>
    )
}