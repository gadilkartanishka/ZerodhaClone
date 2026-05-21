import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = () => {
      axios
        .get("http://localhost:3000/orders")
        .then((res) => setOrders(res.data))
        .catch((error) => console.error("Failed to fetch orders:", error));
    };

    fetchOrders();
    window.addEventListener("orders:changed", fetchOrders);

    return () => {
      window.removeEventListener("orders:changed", fetchOrders);
    };
  }, []);

  if (!orders.length) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id || `${order.name}-${order.price}`}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{Number(order.price).toFixed(2)}</td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
