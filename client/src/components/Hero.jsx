

import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { FaUtensils, FaTruck, FaClock } from 'react-icons/fa';

const Hero = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <div className="relative bg-gray-50 mt-14">
      <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Delicious food,</span>{" "}
              <span className="block text-blue-600 xl:inline">
                delivered to your doorstep
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Bringing the restaurant experience to your home
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">


              <div className="rounded-md shadow mr-5">
                <Link
                  to='/pizzas'
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 cursor-pointer"
                >
                  <FiShoppingCart className="mr-2" />
                  Order Now
                </Link>
              </div>
              {currentUser ? (
                <div className="rounded-md shadow mr-5">
                  <button
                    hidden
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 md:py-4 md:text-lg md:px-10"
                  >
                    <FiShoppingCart className="ml-2" />
                    Sign In
                  </button>
                </div>
              ) : (
                <div className="rounded-md shadow mr-5">
                  <Link
                    to='/login'
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    <FiShoppingCart className="mr-2" />
                    Sign In
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center items-center mt-3">
              <h1 className="text-5xl font-bold mb-4">Delicious Food Delivered Fast</h1>
              <h2 className="text-xl text-gray-600 mb-8">Satisfy your cravings with our mouth-watering dishes</h2>
              <div className="flex justify-center items-center space-x-8 mb-16">
                <div className="flex flex-col justify-center items-center">
                  <FaUtensils className="text-4xl mb-4" />
                  <h3 className="text-lg font-bold">Quality Ingredients</h3>
                  <p className="text-gray-600">We use only the freshest and highest quality ingredients in our dishes</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <FaTruck className="text-4xl mb-4" />
                  <h3 className="text-lg font-bold">Fast Delivery</h3>
                  <p className="text-gray-600">Our speedy delivery service ensures your food arrives hot and fresh</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <FaClock className="text-4xl mb-4" />
                  <h3 className="text-lg font-bold">Quick and Easy Ordering</h3>
                  <p className="text-gray-600">Ordering from our website is simple and hassle-free</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;
