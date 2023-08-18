import styles from './MenuListItem.module.scss'

export default function MenuListItem({menuItem, handleAddToOrder}){
    {console.log('menuItem', menuItem)}
    return(
        <div className={styles.MenuListItem}>
            <div className={styles.emoji +' '+ 'flex-ctr-ctr'}>{menuItem.emoji}</div>
            <div className={styles.name}>{menuItem.name}</div>
            <div className={styles.buy}></div>
            <span>${menuItem.price.toFixed(2)}</span>
            <button className='btn-sm' onClick={()=>handleAddToOrder(menuItem._id)}>ADD</button>
        </div>
    )
}