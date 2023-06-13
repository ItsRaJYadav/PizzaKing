import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUsers } from 'react-icons/fi';
import { FaRubleSign, FaShoppingCart, FaUser } from 'react-icons/fa';
import { HiCurrencyRupee } from 'react-icons/hi';
import { SiProducthunt } from 'react-icons/si';
import { AiFillMessage } from 'react-icons/ai';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../action/pizzaAction';
import { getAllUsers } from '../action/userAction';
import { getAllOrders } from '../action/orderAction';
import Chart from 'chart.js/auto';



const AdminDashboard = () => {
  const dispatch = useDispatch();
  const chartInstanceRef = useRef(null);
  const usersChartRef = useRef(null);
  const productsChartRef = useRef(null);
  const ordersChartRef = useRef(null);
  const revenueChartRef = useRef(null);
  const orderStatusChartRef = useRef(null);
  const chartRef = useRef(null);


  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { pizzas } = pizzastate;

  const allOrdersState = useSelector((state) => state.allUserOrdersReducer);
  const { orders } = allOrdersState;

  const userState = useSelector((state) => state.getAllUsersReducer);
  const { users } = userState;

  const [latestOrders, setLatestOrders] = useState([]);
  const [NewUsers, setNewUsers] = useState([]);

  useEffect(() => {

    dispatch(getAllPizzas());
    dispatch(getAllUsers());
    dispatch(getAllOrders());
  }, [dispatch]);


  useEffect(() => {
    if (orders && orders.length > 0) {
      const latestOrders = orders.slice(-7); // Get the latest 7 orders
      setLatestOrders(latestOrders);
    }
  }, [orders]);

  useEffect(() => {
    if (users && users.length > 0) {
      const NewUsers = users.slice(-5); // Get the latest 5 users
      setNewUsers(NewUsers);
    }
  }, [orders]);

  useEffect(() => {

    if (usersChartRef.current) {
      const ctx = usersChartRef.current.getContext('2d');
      const labels = users.map((user) => `${new Date(user.createdAt).getDate()} ${new Date(user.createdAt).toLocaleString('default', { month: 'long' })}`);
      const data = users.map((user, index) => index + 1);

      if (!chartInstanceRef.current) {
        chartInstanceRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Users',
                data: data,
                backgroundColor: 'rgba(23, 162, 184, 0.5)',
                borderColor: 'rgba(23, 162, 184, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Date',
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'Users',
                },
                suggestedMin: 0,
                suggestedMax: users.length,
              },
            },
          },
        });
      } else {
        // Update chart data
        chartInstanceRef.current.data.labels = labels;
        chartInstanceRef.current.data.datasets[0].data = data;
        chartInstanceRef.current.update();
      }
    }
  }, [users]);



  useEffect(() => {
    if (productsChartRef.current && pizzas.length) {
      const ctx = productsChartRef.current.getContext('2d');

      const categories = pizzas.map((pizza) => pizza.category);
      const uniqueCategories = [...new Set(categories)];
      const categoryCount = uniqueCategories.map((category) =>
        categories.filter((c) => c === category).length
      );

      // Define an array of colors for the categories
      const colors = [
        'rgba(108, 117, 125, 1.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        // Add more colors if needed
      ];

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: uniqueCategories,
          datasets: [
            {
              label: 'Products',
              data: categoryCount,
              backgroundColor: colors.slice(0, uniqueCategories.length),
              borderColor: 'rgba(108, 117, 125, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Category',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Products',
              },
              suggestedMin: 0,
              suggestedMax: Math.max(...categoryCount) + 1,
            },
          },
        },
      });
    }
  }, [pizzas]);

  useEffect(() => {
    if (ordersChartRef.current && orders.length) {
      const ctx = ordersChartRef.current.getContext('2d');

      // Calculate the count of orders for each day
      const ordersByDay = {};
      orders.forEach((order) => {
        const date = new Date(order.createdAt);
        const day = date.toLocaleDateString(); // Use toLocaleDateString to get the day in the format 'MM/DD/YYYY'

        if (ordersByDay[day]) {
          ordersByDay[day] += 1;
        } else {
          ordersByDay[day] = 1;
        }
      });

      const labels = Object.keys(ordersByDay);
      const data = Object.values(ordersByDay);

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Orders',
              data: data,
              backgroundColor: 'rgba(40, 167, 69, 0.5)',
              borderColor: 'rgba(40, 167, 69, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Day',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Orders',
              },
              suggestedMin: 0,
              suggestedMax: Math.max(...data) + 1,
            },
          },
        },
      });
    }
  }, [orders]);




  useEffect(() => {
    if (revenueChartRef.current && orders.length) {
      const ctx = revenueChartRef.current.getContext('2d');
  
      // Extract the revenue amounts and corresponding months from the orders
      const revenueData = orders.map((order) => order.orderAmount);
      const months = orders.map((order) => {
        const orderDate = new Date(order.createdAt);
        const month = orderDate.toLocaleString('default', { month: 'short' });
        return month;
      });
  
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: months,
          datasets: [
            {
              label: 'Revenue',
              data: revenueData,
              backgroundColor: 'rgba(40, 167, 69, 0.5)',
              borderColor: 'rgba(40, 167, 69, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Month',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Revenue',
              },
              suggestedMin: 0,
              suggestedMax: Math.max(...revenueData) + 1,
            },
          },
        },
      });
    }
  }, [orders]);
  


  useEffect(() => {
    if (orderStatusChartRef.current && orders.length) {
      const ctx = orderStatusChartRef.current.getContext('2d');

      const deliveredOrders = orders.filter((order) => order.isDelivered);
      const notDeliveredOrders = orders.filter((order) => !order.isDelivered);

      const data = {
        labels: ['Delivered', 'Not Delivered'],
        datasets: [
          {
            data: [deliveredOrders.length, notDeliveredOrders.length],
            backgroundColor: ['rgba(40, 167, 69, 0.5)', 'rgba(255, 99, 132, 0.5)'],
            borderColor: ['rgba(40, 167, 69, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      };

      new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [orders]);


  //message display
  useEffect(() => {
    const chartCanvas = chartRef.current.getContext('2d');

    const data = {
      labels: ['Messages', 'Issues Resolved', 'Pending'],
      datasets: [{
        label: 'Number of Messages',
        data: [150, 75, 28],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF3131'],
      }]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          max: 200
        }
      }
    };

    new Chart(chartCanvas, {
      type: 'bar',
      data: data,
      options: options
    });
  }, []);

  const calculateTotalOrderValue = () => {
    let totalValue = 0;
    orders.forEach((order) => {
      totalValue += Number(order.orderAmount);
    });
    return totalValue.toFixed(2);
  };



  return (
    <div className="flex flex-col h-auto bg-gray-100">

      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">


          {/*User chart status */}
          <div className="p-6 bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out">
            <Link to="/admin/users" className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">Users</h3>
                <p className="text-gray-600">Total Users: {users.length} </p>
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full">
                <FiUsers className="text-2xl" />
              </div>
            </Link>
            <div className="chart-container">
              <canvas ref={usersChartRef}></canvas>
            </div>
          </div>
          <div className="p-6 bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out">
            <Link to="/admin/products" className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">Products</h3>
                <p className="text-gray-600">Total Products: {pizzas.length}</p>
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full">
                <SiProducthunt className="text-2xl" />
              </div>
            </Link>
            <div className="chart-container">
              <canvas ref={productsChartRef}></canvas>
            </div>
          </div>


          {/* All Order chart status */}
          <div className="p-6 bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out">
            <Link to="/admin/orderlist" className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">Orders</h3>
                <p className="text-gray-600">Total Orders:{orders.length} </p>
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full">
                <FaShoppingCart className="text-2xl" />
              </div>
            </Link>
            <div className="chart-container">
              <canvas ref={ordersChartRef}></canvas>
            </div>
          </div>


          {/* Revenue chart status */}
          <div className="p-6 bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out">
            <Link to="/admin/orderlist" className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">Revenue</h3>
                <p className="text-gray-600">Total Payment: Rs {calculateTotalOrderValue()}/-</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full">
                <HiCurrencyRupee className="text-xl" />
              </div>
            </Link>
            <div className="chart-container">
              <canvas ref={revenueChartRef}></canvas>
            </div>
          </div>


          {/* Order Status chart status */}
          <div className="p-6 bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out">
            <Link to="/admin/orderlist" className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">Order Status</h3>
                <p className="text-gray-600">Order Status </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 text-white rounded-full">
                <MdOutlineDeliveryDining className="text-xl" />
              </div>
            </Link>
            <div className="chart-container">
              <canvas ref={orderStatusChartRef} width="200" height="200"></canvas>
            </div>
          </div>


          {/* Contact chart status */}
          <div className="p-6 bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out">
            <Link to="/admin/allcontact" className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">Contact data</h3>
                <p className="text-gray-600">Contact Data Status</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 text-white rounded-full">
                <AiFillMessage className="text-xl" />
              </div>
            </Link>
            <div className="chart-container">
              <canvas ref={chartRef}></canvas>
            </div>
          </div>


          {/* Latest Transactions */}
          <div className="p-4 bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out">
            <Link to="/admin/alltransactions" className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800 flex center">Latest Transactions</h3>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-cyan-500 text-white rounded-full">
                <FaRubleSign className="text-xl" />
              </div>
            </Link>
            <div className="chart-container">
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white shadow-md rounded">
                    <thead>
                      <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                        <th className="py-3 px-2 text-left">Customer</th>
                        <th className="py-3 px-2 text-left">Amount</th>
                        <th className="py-3 px-2 text-left">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {latestOrders.map((order, index) => (
                        <tr key={order._id} className={`border-b border-gray-200 hover:bg-${index % 2 === 0 ? 'gray-100' : 'white'}`}>
                          <td className="py-3 px-2">{order.name}</td>
                          <td className="py-3 px-2 font-bold text-green-500">Rs {order.orderAmount}/-</td>
                          <td className="py-3 px-2">{order.createdAt.substring(0, 10)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>



          {/* Latest customer */}
          <div className="p-4 bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out">
            <Link to="/admin/alltransactions" className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800 flex center">New Customer</h3>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-cyan-500 text-white rounded-full">
                <FaUser className="text-xl" />
              </div>
            </Link>
            <div className="chart-container">
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white shadow-md rounded">
                    <thead>
                      <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                        <th className="py-3 px-2 text-left">Customer</th>
                        <th className="py-3 px-2 text-left">Email</th>
                        <th className="py-3 px-2 text-left">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {NewUsers.map((users, index) => (
                        <tr key={users._id} className={`border-b border-gray-200 hover:bg-${index % 2 === 0 ? 'gray-100' : 'white'}`}>
                          <td className="py-3 px-2">{users.name}</td>
                          <td className="py-3 px-2 font-bold text-blue-400">{users.email}</td>
                          <td className="py-3 px-2">{users.createdAt.substring(0, 10)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;