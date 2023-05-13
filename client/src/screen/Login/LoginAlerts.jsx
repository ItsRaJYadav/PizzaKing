import { Link } from "react-router-dom";

const LoginReminder = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Please log in to access your cart
          </h2>
        </div>
        <div className="flex justify-center">
          <Link
            to='/login'
            className="mt-8 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginReminder;
