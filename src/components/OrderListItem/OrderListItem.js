import styles from './OrderListItem.module.scss'

export default function OrderListItem({order,isSelected, handleSelectedOrder}){
    return(
        <div className={`${styles.OrderListItem} ${isSelected ? styles.selected : ''}`} onClick={() => handleSelectedOrder(order)}>
    <div>
      <div>Order Id: <span className="smaller">{order.orderId}</span></div>
      <div className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</div>
    </div>
    <div className="align-rt">
      <div>${order.orderTotal.toFixed(2)}</div>
      <div className="smaller">{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
    </div>
  </div>
    )

}