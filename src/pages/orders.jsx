import {
  ChevronLeftIcon,
  ClockIcon,
  EyeIcon,
  ShoppingBagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import { allOrders } from "../constants/orders";
import './product.css'

const OrdersManagement = () => {
  const [orders, setOrders] = useState(allOrders);

  const [open, setOpen] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
    setOpen(!open);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    setSelectedOrder(null);
    setOpen(false);
  };

  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    setSelectedOrder(null);
  };

  return (
    <div className="container mx-auto p-4">
      <Link className="font-bold text-blue-400 flex items-center" to="/">
        <ChevronLeftIcon className="h-4 w-4 font-bold" />
        <h1 className="h">Dashboard</h1>
      </Link>
      <h2 className="text-2xl font-bold mb-4">Orders Management</h2>

      <div className="overflow-x-scroll">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-slate-950 text-white">
              <th className="py-2 px-4 border-2">Order ID</th>
              <th className="py-2 px-4 border-2">Customer</th>
              <th className="py-2 px-4 border-2">Order Date</th>
              <th className="py-2 px-4 border-2">Status</th>
              <th className="py-2 px-4 border-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-2">{order.orderID}</td>
                <td className="py-2 px-4 border-2">{order.customerName}</td>
                <td className="py-2 px-4 border-2">{order.orderDate}</td>
                <td className="py-2 px-4 border-2">{order.status}</td>
                <td className="py-2 px-4 border flex flex-col md:flex-row">
                  <button
                    onClick={() => viewOrderDetails(order)}
                    className="bg-blue-500 text-white px-2 py-1 m-2 rounded hover:bg-blue-700 flex items-center gap-2 w-fit h-fit"
                  >
                    <EyeIcon className="h-6 w-6 md:h-4 md:w-4" /> View
                  </button>
                  <button
                    onClick={() => updateOrderStatus(order.id, "Delivered")}
                    className="bg-green-500 text-white px-2 py-1 m-2 rounded hover:bg-green-700 flex items-center gap-2 w-fit h-fit"
                  >
                    {order.status === "Processing" ? (
                      <ClockIcon className="h-6 w-6 md:h-4 md:w-4" />
                    ) : (
                      <ShoppingBagIcon className="h-6 w-6 md:h-4 md:w-4" />
                    )}
                    {order.status}
                  </button>
                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="bg-red-500 text-white px-2 py-1 m-2 rounded hover:bg-red-700 flex items-center gap-2 w-fit h-fit"
                  >
                    <TrashIcon className="h-6 w-6 md:h-4 md:w-4" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && open && (
        <div className="mt-4 p-4 border rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Order Details</h3>
          <p>Order ID: {selectedOrder.orderID}</p>
          <p>Customer: {selectedOrder.customerName}</p>
          <p>Order Date: {selectedOrder.orderDate}</p>
          <p>Status: {selectedOrder.status}</p>
        </div>
      )}
    </div>
  );
};

export default OrdersManagement;
