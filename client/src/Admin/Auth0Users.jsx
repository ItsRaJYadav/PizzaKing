import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRwSXR3TTc4aHZvMkpyV1ozRnFtaSJ9.eyJpc3MiOiJodHRwczovL2Rldi1xd2FtMHBtOGhxcHAwNXRzLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJTc1d3MEFVNzh0MWdVV3hTb2J1WHNkZ3hTNDN2QWJEMUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtcXdhbTBwbThocXBwMDV0cy51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY4NDIzMDI2NywiZXhwIjoxNjg0MzE2NjY3LCJhenAiOiJTc1d3MEFVNzh0MWdVV3hTb2J1WHNkZ3hTNDN2QWJEMSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.SXsBNNQnEbRBo_aU6moUJEmfguWQifiXJtBqW71nKqk_FBU2mHPkIXsF0CkHSAYPVlRW1XVQnWj8zCfiFBFRo5d6EXrk-EC9J1MrD4omFqQ22NFmNuVkQ6A7KScPva9CUkBnzMZZE0bINow0h2WC27LBHt_CtcbxiiFwjp3GgcNXaEIWUhwM641AVELDP80p2O8ZU6n-oRHUE_2kApFdJLF2IxC7a0XO7b0camHDmwl1VDBFQ474zhStXjygw-4CTWmi-8Ovi03bLwqKVtXBHwJmZIVjfOwS4TvbXrVNXnroVMfdbDiB11u6h7UXI23urrJa0AnZC_KGCyqHuoi2ZQ';
        const apiUrl = 'https://dev-qwam0pm8hqpp05ts.us.auth0.com/api/v2/';

        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
