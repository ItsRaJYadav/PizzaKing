
import React, { useState } from 'react';
import { FiMenu, FiPackage } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { FaAddressBook } from 'react-icons/fa';
import { BsSearch, BsChatDotsFill } from 'react-icons/bs';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../action/userAction';
import { useAuth0 } from '@auth0/auth0-react';
import LoginAlerts from '../../screen/Login/LoginAlerts';
import pic from '../../assets/default-user-image.jpg'

const User = () => {

    const { user, isAuthenticated } = useAuth0();


    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;
    const dispatch = useDispatch();

    const [activeTab, setActiveTab] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        toggleTab(4);
    };

    const handleSearch = () => {

        const searchData = [];


        const filteredResults = searchData.filter((item) => {
            return item.name.toLowerCase().includes(searchQuery.toLowerCase());
        });

        setFilteredData(filteredResults);
    };

    if (!isAuthenticated && !currentUser) {
        return <LoginAlerts />;
    }

    return (
        <div className="flex h-screen">
            <div className="h-full p-3 w-60 dark:bg-gray-900 dark:text-gray-100">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2> User Dashboard</h2>
                        <button className="p-2">
                            <FiMenu className="w-5 h-5 fill-current dark:text-gray-100" />
                        </button>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button type="submit" className="p-2 focus:outline-none focus:ring" onClick={handleSearch}>
                                <BsSearch />
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            {filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <li className="rounded-sm" key={item.id}>
                                        <Link
                                            to={item.link}
                                            className={`flex items-center p-2 space-x-3 rounded-md ${activeTab === item.id ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
                                            onClick={() => toggleTab(item.id)}
                                        >
                                            <div className="w-5 h-5 fill-current dark:text-gray-400">{item.icon}</div>
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <li className="rounded-sm">
                                    <Link
                                        to="/user/userinfo"
                                        className={`flex items-center p-2 space-x-3 rounded-md ${activeTab === 1 ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
                                        onClick={() => toggleTab(1)}
                                    >
                                        <div className="w-5 h-5 fill-current dark:text-gray-400">
                                            <AiFillHome />
                                        </div>
                                        <span>Home</span>
                                    </Link>
                                </li>


                            )}
                            <li className="rounded-sm">
                                <Link to="/user/orders" className={`flex items-center p-2 space-x-3 rounded-md ${activeTab === 2 ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
                                    onClick={() => toggleTab(2)}>
                                    <svg className="w-5 h-5 fill-current dark:text-gray-400">
                                        <FiPackage />
                                    </svg>
                                    <span>Orders</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to='/user/address' className={`flex items-center p-2 space-x-3 rounded-md ${activeTab === 3 ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
                                    onClick={() => toggleTab(3)}>
                                    <svg className="w-5 h-5 fill-current dark:text-gray-400">
                                        <FaAddressBook />
                                    </svg>
                                    <span>Address</span>
                                </Link>
                            </li>


                            <li className="rounded-sm">
                                <Link to='settings' className={`flex items-center p-2 space-x-3 rounded-md ${activeTab === 4 ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
                                    onClick={() => toggleTab(4)}>
                                    <svg className="w-5 h-5 fill-current dark:text-gray-400">
                                        <BsChatDotsFill />
                                    </svg>
                                    <span>Settings</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link className={`flex items-center p-2 space-x-3 rounded-md ${activeTab === 5 ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
                                    onClick={() => {
                                        toggleTab(5);
                                        handleLogout();
                                    }}>
                                    <svg className="w-5 h-5 fill-current dark:text-gray-400">
                                        <BiLogOut />
                                    </svg>
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                    {!isAuthenticated ? (
                        <img
                            src={pic}
                            alt="Profile pic"
                            className="w-12 h-12 rounded-lg dark:bg-gray-500"
                        />
                    ) : (
                        <img
                            src={user && user.picture}
                            alt={`Profile pic for ${user && user.name}`}
                            className="w-12 h-12 rounded-lg dark:bg-gray-500"
                        />
                    )}

                    <div>
                        <h2 className="text-lg font-semibold">{isAuthenticated ? (
                  <>{user && user.name}</>
                ) : (
                  <>{currentUser && currentUser.name}</>
                )}</h2>
                        <span className="flex items-center space-x-1">
                            <Link to='/user/userinfo' className="text-xs hover:underline dark:text-gray-400">
                                View profile
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default User;
