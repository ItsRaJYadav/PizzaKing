import { Link } from "react-router-dom";
import Cart from '../../assets/cart.gif'

const CartPage = () => {

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Your cart is empty</h2>
            <p className="text-gray-600 mb-4">
              Please add items to your cart to checkout.
            </p>
            <img
          src={Cart}
          alt="Order on the way"
          className="my-4 mx-auto w-64"
        />
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
