import { useEffect, useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiUsers } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import { HiCurrencyRupee } from 'react-icons/hi';
import { SiProducthunt } from 'react-icons/si';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../action/pizzaAction';
import { getAllUsers } from '../action/userAction';
import { getAllOrders } from '../action/orderAction';
import Chart from 'chart.js/auto';
import Loader from '../Alerts/Loader';


const AdminDashboard = () => {
  const dispatch = useDispatch();
  const chartInstanceRef = useRef(null);
  const usersChartRef = useRef(null);
  const productsChartRef = useRef(null);
  const ordersChartRef = useRef(null);
  const revenueChartRef = useRef(null);
  const orderStatusChartRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { pizzas } = pizzastate;

  const allOrdersState = useSelector((state) => state.allUserOrdersReducer);
  const { orders } = allOrdersState;

  const userState = useSelector((state) => state.getAllUsersReducer);
  const { users } = userState;

  useEffect(() => {
    dispatch(getAllPizzas());
    dispatch(getAllUsers());
    dispatch(getAllOrders());
  }, [dispatch]);

  useEffect(() => {
    if (usersChartRef.current && productsChartRef.current && ordersChartRef.current && revenueChartRef.current && orderStatusChartRef.current) {
      const usersCtx = usersChartRef.current.getContext('2d');
      const productsCtx = productsChartRef.current.getContext('2d');
      const ordersCtx = ordersChartRef.current.getContext('2d');
      const revenueCtx = revenueChartRef.current.getContext('2d');
      const orderStatusCtx = orderStatusChartRef.current.getContext('2d');
  
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
  
      //it Calculate the count of orders for each day
      const ordersByDay = {};
      orders.forEach((order) => {
        const date = new Date(order.createdAt);
        const day = date.toDateString();
  
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
              suggestedMax: Math.max(...data) + 1, // Adjust the maximum based on the highest count
            },
          },
        },
      });
    }
  }, [orders]);
  
  

  useEffect(() => {
    if (revenueChartRef.current && orders.length) {
      const ctx = revenueChartRef.current.getContext('2d');
  
      // Extract the revenue amounts from the orders
      const revenueData = orders.map((order) => order.orderAmount);
  
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Replace with your actual labels
          datasets: [
            {
              label: 'Revenue',
              data: revenueData, // Replace with your actual revenue data
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
              suggestedMax: Math.max(...revenueData) + 1, // Adjust the maximum based on the highest revenue
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

  const calculateTotalOrderValue = () => {
    let totalValue = 0;
    orders.forEach((order) => {
      totalValue += Number(order.orderAmount);
    });
    return totalValue.toFixed(2);
  };
}
}, []);
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      
      <div className="flex-1 p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-800 text-center">Welcome Admin</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;