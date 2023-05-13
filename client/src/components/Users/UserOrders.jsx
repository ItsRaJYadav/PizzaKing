// import React from 'react';
// import { Link } from 'react-router-dom';
// import { format } from 'date-fns';
// import { orders } from './data'; // sample data for demonstration purposes


// function Order({ order }) {
//   return (
//     <div className="border-b py-4">
//       <div className="flex justify-between mb-2">
//         <div className="text-gray-700 font-medium">Order #{order.id}</div>
//         <div className="text-gray-500">{format(order.date, 'MM/dd/yyyy')}</div>
//       </div>
//       <div className="text-sm text-gray-500 mb-2">{order.items.length} items</div>
//       <div className="text-sm text-gray-500">{order.total}</div>
//       <div className="text-sm text-gray-500">{order.status}</div>
//       <Link to={`/orders/${order.id}`} className="text-sm text-blue-500 hover:underline">
//         View Details
//       </Link>
//     </div>
//   );
// }

// export default function Orders() {
//   return (
//     <div className="container mx-auto mt-8 px-4">
//       <h1 className="text-3xl font-bold mb-4">My Orders</h1>
//       {orders.length > 0 ? (
//         <div className="divide-y">
//           {orders.map(order => (
//             <Order key={order.id} order={order} />
//           ))}
//         </div>
//       ) : (
//         <p>You have no orders.</p>
//       )}
//     </div>
//   );
// }


import React from 'react'

const UserOrders = () => {
  return (
    <div>UserOrders</div>
  )
}

export default UserOrders
