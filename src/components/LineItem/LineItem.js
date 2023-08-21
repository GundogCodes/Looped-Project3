import styles from './LineItem.module.scss'

export default function lineItem({lineItem, isPaid, handleChangeQty}){
    return(
        <div className={styles.LineItem}>
            <div className={styles.nameAndPrice}>
                <span className={styles.itemName}>{lineItem.item.name}</span>
                <p className={styles.divider}>  </p><span className={styles.itemPrice}>${lineItem.item.price.toFixed(2)}</span>
            </div>
            <div className={styles.qty} style={{justifyContent: isPaid && 'center'}}>
                {!isPaid &&
                <button
            className={styles.minus}
            onClick={()=> handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
                > - </button>  
            }
            </div>
            <div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div>
        </div>
    )
}