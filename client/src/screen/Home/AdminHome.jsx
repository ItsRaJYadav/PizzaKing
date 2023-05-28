import React from "react";
import { FaUser, FaShoppingCart, FaClipboardList } from "react-icons/fa";
import { useTransition, animated } from "react-spring";

const AdminPage = () => {
  const gridItems = [
    {
      id: 1,
      icon: FaUser,
      title: "Users",
      description: "View and manage user accounts",
    },
    {
      id: 2,
      icon: FaShoppingCart,
      title: "Orders",
      description: "Track and process customer orders",
    },
    {
      id: 3,
      icon: FaClipboardList,
      title: "Reports",
      description: "Generate and analyze business reports",
    },
  ];

  const transitions = useTransition(gridItems, (item) => item.id, {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 500 },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-3xl px-6 py-8 bg-white rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <p className="text-gray-600">
          Welcome to the admin dashboard. Here you can manage user accounts, track orders, and generate business reports.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {transitions.map(({ item, key, props }) => (
            <animated.div key={key} style={props}>
              <div className="p-8 bg-white rounded-lg shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full">
                  <item.icon className="text-3xl" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">{item.title}</h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </animated.div>
          ))}
        </div>
        <p className="mt-8 text-gray-600">
          Take advantage of the powerful features available in the admin dashboard to streamline your workflow and enhance your business operations.
        </p>
        <p className="text-gray-600 mt-2">
          If you need any assistance or have questions, our support team is here to help you.
        </p>
      </div>
    </div>
  );
};

export default AdminPage;
