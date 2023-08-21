import styles from './OrderHistoryPage.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../../utilities/order-api';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistoryPage({ user, setUser }) {
  /*--- State --- */
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  /*--- Side Effects --- */
  useEffect(function () {
    // Load previous orders (paid)
    async function fetchOrderHistory() {
      const orders = await ordersAPI.getOrderHistory();
      setOrders(orders);
      // If no orders, activeOrder will be set to null below
      setActiveOrder(orders[0] || null);
    }
    fetchOrderHistory();
  }, []);

  /*--- Event Handlers --- */
  function handleSelectedOrder(order) {
    setActiveOrder(order);
  }

  /*--- Rendered UI --- */
  return (
    <main className={styles.OrderHistoryPage}>
      <aside className={styles.aside}>
        <Link to="/orders/new" className={styles.newOrder}>NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <div className={styles.theBody}>
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        handleSelectedOrder={handleSelectedOrder}
        />
      <OrderDetail
        order={activeOrder}
        />
        </div>
    </main>
  );
}