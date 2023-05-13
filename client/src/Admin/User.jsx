
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { deleteUser, getAllUsers } from "../action/userAction";
import Loader from "./Loader";

const Userlist = () => {
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = userState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  // Define function to get the serial number
  const getSerialNumber = (index) => {
    return (index + 1).toString();
  }

  return (
    <>
      {loading && <div> <Loader /> </div>}
      {error && <div error="Error While Fetching Users" />}
      <div className="bg-white shadow-md rounded-md overflow-hidden">
      <h1 className="text-2xl font-bold p-4">User List</h1>
      <table className="table-auto w-full text-center">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">User ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Admin</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {users &&
            users.map((user, index) => (
              <tr key={user._id} className={(index % 2 === 0 ? 'bg-gray-200' : '')}>
                <td className="border px-4 py-2">{getSerialNumber(index)}</td>
                <td className="border px-4 py-2">{user._id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.isAdmin ? 'Yes' : 'No'}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  <AiFillDelete
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                    onClick={() => {
                      dispatch(deleteUser(user._id));
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>


    </>
  );
};

export default Userlist;

