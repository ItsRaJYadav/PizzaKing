import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../action/userAction";
import { useAuth0 } from "@auth0/auth0-react";
import LoginAlerts from '../../screen/Login/LoginAlerts'

function UserAccount() {
    const { isAuthenticated } = useAuth0();

    const dispatch = useDispatch();
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;
    const [activeTab, setActiveTab] = useState(1);

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const handleLogout = () => {

        dispatch(logoutUser());
        toggleTab(4);
    }
    if (!isAuthenticated && !currentUser) {
        return <>
            <LoginAlerts />
        </>
    }

    return (
        <div className="flex w-full h-full mt-5">
            <div className="flex flex-col w-1/5 border-r">
                <Link
                    to="/user/userinfo"
                    className={`${activeTab === 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-600"
                        } py-2 px-4 border-b border-r`}
                    onClick={() => toggleTab(1)}
                >
                    Profile
                </Link>
                <Link to='/user/orders'

                    className={`${activeTab === 2
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-600"
                        } py-2 px-4 border-b border-r`}
                    onClick={() => toggleTab(2)}
                >
                    Orders
                </Link>
                <Link to="/user/address"
                    className={`${activeTab === 3
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-600"
                        } py-2 px-4 border-r`}
                    onClick={() => toggleTab(3)}
                >
                    Address
                </Link>
                <Link
                    className={`${activeTab === 4
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-600"
                        } py-2 px-4 border-r`}
                    onClick={handleLogout}
                >
                    Log Out
                </Link>
            </div>


            <Outlet />

        </div>
    );
}

export default UserAccount;
