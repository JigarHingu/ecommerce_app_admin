import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return null;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
      } catch (error) {
        toast.error(error.message);
      }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
        toast.success("Order status updated successfully.");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update order status.");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="container mx-auto my-8 p-4 md:p-8 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Order Management
      </h3>
      <div>
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-6 items-start border border-gray-300 p-6 mb-6 bg-white rounded-lg shadow hover:shadow-md transition-all duration-300"
            key={index}
          >
            <img
              className="w-16 h-16 object-contain"
              src={assets.parcel_icon}
              alt="Order Icon"
            />
            <div>
              <div className="mb-2">
                {order.items.map((item, index) => (
                  <p className="py-1 text-gray-700" key={index}>
                    {item.name} x {item.quantity}{" "}
                    <span className="text-sm text-gray-500">({item.size})</span>
                    {index !== order.items.length - 1 && ","}
                  </p>
                ))}
              </div>
              <p className="text-lg font-medium text-gray-900">
                {order.address.firstName} {order.address.lastName}
              </p>
              <div className="text-sm text-gray-600">
                <p>{order.address.street},</p>
                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Phone: {order.address.phone}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-700">
                Items: {order.items.length}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Method: {order.paymentMethod}
              </p>
              <p
                className={`text-sm font-semibold mt-1 ${
                  order.payment ? "text-green-600" : "text-red-600"
                }`}
              >
                Payment: {order.payment ? "Done" : "Pending"}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Date: {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <p className="text-lg font-semibold text-gray-900">
              {currency}
              {order.amount}
            </p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 rounded-md bg-gray-100 border border-gray-300 text-gray-700 font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;



// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { backendUrl, currency } from "../App";
// import { toast } from "react-toastify";
// import { assets } from "../assets/assets";

// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([]);
//   const fetchAllOrders = async () => {
//     if (!token) {
//       return null;
//     }
//     try {
//       const response = await axios.post(
//         backendUrl + '/api/order/list',
//         {},
//         { headers: { token }}
//       );
//       if (response.data.success) {
//         setOrders(response.data.orders);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//   };

//   const statusHandler = async (event, orderId ) => {
//     try {
//       const response = await axios.post(backendUrl + '/api/order/status', {orderId, status:event.target.value},{headers:{token}})
//       if (response.data.success) {
//         await fetchAllOrders()
//         toast.success("Order status updated successfully.");
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to update order status.");
//     }
//   };

//   useEffect(() => {
//     fetchAllOrders();
//   }, [token]);

//   return (
//     <div>
//       <h3>Order Page</h3>
//       <div>
//         {orders.map((order, index) => (
//           <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
//             <img className='w-12' src={assets.parcel_icon} alt="" />
//             <div>
//               <div>
//                 {order.items.map((item, index) => {
//                   if (index === order.items.length - 1) {
//                     return (
//                       <p className='py-0.5' key={index}>
//                         {item.name} x {item.quantity} <span> {item.size} </span>
//                       </p>
//                     );
//                   } else {
//                     return (
//                       <p className='py-0.5' key={index}>
//                         {item.name} x {item.quantity} <span> {item.size} </span>
//                         ,
//                       </p>
//                     );
//                   }
//                 })}
//               </div>
//               <p className="mt-3 mb-2 font-medium">{order.address.firstName + " " + order.address.lastName}</p>
//               <div>
//                 <p>{order.address.street + ","}</p>
//                 <p>
//                   {order.address.city +
//                     ", " +
//                     order.address.state +
//                     ", " +
//                     order.address.country +
//                     ", " +
//                     order.address.zipcode}
//                 </p>
//               </div>
//               <p>{order.address.phone}</p>
//             </div>
//             <div>
//               <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
//               <p className='mt-3'>Method : {order.paymentMethod}</p>
//               <p>Payment : {order.payment ? 'Done' : 'Pending' }</p>
//               <p>Date : {new Date(order.date).toLocaleDateString()}</p>
//             </div>
//             <p className="text-sm sm:text-[15px]">{currency}{order.amount}</p>
//             <select onChange={(event) => statusHandler(event,order._id)} value={order.status} className="p-2 font-semibold">
//               <option value="Order Placed">Order Placed</option>
//               <option value="Packing">Packing</option>
//               <option value="Shipped">Shipped</option>
//               <option value="Out for Delivery">Out for Delivery</option>
//               <option value="Delivered">Delivered</option>
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;

