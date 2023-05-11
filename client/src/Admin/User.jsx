// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AiFillDelete } from "react-icons/ai";
// import { Table } from "react-bootstrap";
// import { deleteUser, getAllUsers } from "../action/userAction";
// import Loader from "./Loader";
// const Userlist = () => {
//   const userState = useSelector((state) => state.getAllUsersReducer);
//   const { loading, error, users } = userState;
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllUsers());
//   }, [dispatch]);
//   return (
//     <div>
     
//       {loading && <div> <Loader/> </div>}
//       {error && <div error="Error While Fetching Users" />}
//       <h1>User List</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>User ID</th>
//             <th>Name</th>
//             <th>Admin</th>
//             <th>Email</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users &&
//             users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user._id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.isAdmin ? 'Yes' : 'No'}</td>

//                 <td>{user.email}</td>
//                 <td>
//                   <AiFillDelete
//                     style={{ color: "red", cursor: "pointer" }}
//                     onClick={() => {
//                       dispatch(deleteUser(user._id));
//                     }}
//                   />
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Userlist;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
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
    <div>
      {loading && <div> <Loader/> </div>}
      {error && <div error="Error While Fetching Users" />}
      <h1>User List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. no.</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Admin</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={user._id}>
                <td>{getSerialNumber(index)}</td>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                <td>{user.email}</td>
                <td>
                  <AiFillDelete
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      dispatch(deleteUser(user._id));
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Userlist;

