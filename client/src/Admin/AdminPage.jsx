// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FiSettings, FiUsers, FiPackage } from 'react-icons/fi';

// const AdminDashboard = () => {
//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       <div className="flex items-center justify-between px-6 py-4 bg-white border-b-2 border-gray-100">
//         <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
//         <Link to="/admin/settings" className="text-gray-600 hover:text-gray-800">
//           <FiSettings className="w-6 h-6" />
//         </Link>
//       </div>
//       <div className="flex-1 p-6 flex flex-col items-center justify-center">
//         <h2 className="mb-4 text-3xl font-bold text-gray-800">Welcome Admin</h2>
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
//           <div className="p-6 bg-white border rounded-md shadow-md">
//             <Link to="/admin/users" className="flex items-center justify-between">
//               <div>
//                 <h3 className="mb-2 text-lg font-bold text-gray-800">Users</h3>
//                 <p className="text-gray-600">{/* Total Users */}10</p>
//               </div>
//               <FiUsers className="w-8 h-8 text-gray-800" />
//             </Link>
//           </div>
//           <div className="p-6 bg-white border rounded-md shadow-md">
//             <Link to="/admin/products" className="flex items-center justify-between">
//               <div>
//                 <h3 className="mb-2 text-lg font-bold text-gray-800">Products</h3>
//                 <p className="text-gray-600">{/* Total Products */}20</p>
//               </div>
//               <FiPackage className="w-8 h-8 text-gray-800" />
//             </Link>
//           </div>
//           <div className="p-6 bg-white border rounded-md shadow-md">
//             <Link to="/admin/orders" className="flex items-center justify-between">
//               <div>
//                 <h3 className="mb-2 text-lg font-bold text-gray-800">Orders</h3>
//                 <p className="text-gray-600">{/* Total Orders */}5</p>
//               </div>
//               <FiUsers className="w-8 h-8 text-gray-800" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiUsers } from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from '../action/pizzaAction'
import { getAllUsers } from '../action/userAction'


const AdminDashboard = () => {
    const dispatch = useDispatch();

const pizzastate = useSelector((state) => state.getAllPizzaReducer);
const { loading, pizzas, error } = pizzastate;

useEffect(() => {
  dispatch(getAllPizzas());
}, [dispatch]);

const userState = useSelector((state) => state.getAllUsersReducer);
const { loadings, users, errors } = userState;

useEffect(() => {
  dispatch(getAllUsers());
}, [dispatch]);


  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b-2 border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Admin Dashboard</h1>
        <Link to="/admin/settings" className="text-gray-600 hover:text-gray-800">
          <FiSettings className="w-6 h-6" />
        </Link>
      </div>
      <div className="flex-1 p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-800 text-center">Welcome Admin</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out">
            <Link to="/admin/users" className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">Users</h3>
                <p className="text-gray-600">Total Users:{users.length} </p>
              </div>
              <FiUsers className="w-8 h-8 text-gray-800" />
            </Link>
          </div>
          <div className="p-6 bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out">
            <Link to="/admin/products" className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">Products</h3>
                <p className="text-gray-600">Total Products: {pizzas.length}</p>
              </div>
              <FiUsers className="w-8 h-8 text-gray-800" />
            </Link>
          </div>
          <div className="p-6 bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out">
            <Link to="/admin/orders" className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">Orders</h3>
                <p className="text-gray-600">Total Orders: 5</p>
              </div>
              <FiUsers className="w-8 h-8 text-gray-800" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
