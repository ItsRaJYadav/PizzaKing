import { useSelector } from "react-redux";
import pic from '../../assets/default-user-image.jpg'
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function UserTable() {
  const { user, isAuthenticated } = useAuth0();

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateDetails = () => {
    // Write your code here to update user details
    // You can access the user data from the 'user' or 'currentUser' object
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-screen-lg mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 mb-6 md:mb-8">
        <div className="md:order-2 w-full md:w-2/5 mb-4 md:mb-0">
          <div className="bg-gray-100 p-3 rounded-md overflow-hidden">
            {!isAuthenticated ? (
              <img
                src={pic}
                alt="Profile pic"
                className="w-full object-cover"
              />
            ) : (
              <img
                src={user && user.picture}
                alt={`Profile pic for ${user && user.name}`}
                className="w-full object-cover"
              />
            )}
          </div>
        </div>
        <div className="md:order-1 w-full md:w-3/5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
            User Details
          </h1>
          <div className="flex flex-col mb-4 md:mb-6">
            <label
              htmlFor="name"
              className="text-lg md:text-xl font-bold text-gray-700 mb-1"
            >
              Name
            </label>
            <div className="bg-gray-100 p-3 rounded-md">
              <span className="text-lg md:text-xl font-medium text-gray-800">
                {isAuthenticated ? (
                  <>{user && user.name}</>
                ) : (
                  <>{currentUser && currentUser.name}</>
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-4 md:mb-6">
            <label
              htmlFor="email"
              className="text-lg md:text-xl font-bold text-gray-700 mb-1"
            >
              Email
            </label>
            <div className="bg-gray-100 p-3 rounded-md">
              <span className="text-lg md:text-xl font-medium text-gray-800">
                {isAuthenticated ? (
                  <>{user && user.email}</>
                ) : (
                  <>{currentUser && currentUser.email}</>
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-4 md:mb-6">
            <label
              htmlFor="email"
              className="text-lg md:text-xl font-bold text-gray-700 mb-1"
            >
              UserName
            </label>
            <div className="bg-gray-100 p-3 rounded-md">
              <span className="text-lgmd:text-xl font-medium text-gray-800">
                {isAuthenticated ? (
                  <>{user && user.email.split('@')[0]}</>
                ) : (
                  <>{currentUser && currentUser.email.split('@')[0]}</>
                )}
              </span>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleOpenModal}
          >
            Update Details
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-black opacity-75 backdrop-filter backdrop-blur-sm pointer-events-none"></div>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 relative z-10">
            <div className="container mx-auto p-4">
              <button onClick={handleCloseModal}>close</button>
              <form className="max-w-md mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    User Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your user name"
                  // value={userName}
                  // onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
                    Avatar
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="avatar"
                    type="text"
                    placeholder="Enter the URL of your avatar"
                  // value={avatar}
                  // onChange={(e) => setAvatar(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      )}
    </div>
  );
}

export default UserTable;
