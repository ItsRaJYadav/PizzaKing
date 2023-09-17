import React, { useState } from "react";
import './Nav.css'
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { BsBox2HeartFill, BsFillCartFill } from "react-icons/bs";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { Hidden } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { FiX } from "react-icons/fi";
import { GrOrganization, GrCheckboxSelected, GrUserNew } from "react-icons/gr";
import { MdContactPhone, MdFastfood, MdSell } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";



const Header = () => {
  const { isAuthenticated, user } = useAuth0();

  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };



  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };



  return (
    <>
      <div className="flex flex-wrap place-items-center overflow-hidden">
        <section className="relative">
          {/* navbar */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen py-1 md:py-2">
            <div className="px-2 xl:px-8 flex w-full items-center">
              <Link to="/" className="text-3xl font-bold font-heading mb-5">
                {/* <img class="h-9" src="logo.png" alt="logo"> */}
                PizzaKing
              </Link>
              {/* Nav Links */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">

                {
                  currentUser && currentUser.isAdmin ? null : (
                    <>
                      <li>
                        <NavLink to="/menu" className="hover:text-gray-200">
                          Menu
                        </NavLink>
                      </li>
                      <Link to="/company" className="hover:text-gray-200" >
                        Company
                      </Link>
                      <li>
                        <Link to="/contact" className="hover:text-gray-200" >
                          Contact Us
                        </Link>
                      </li>




                      {/* searchbox */}


                    </>
                  )
                }

                <li>
                  {currentUser && currentUser.isAdmin && (
                    <a
                      href="/admin"
                      className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3"
                    >
                      Admin Pannel
                    </a>
                  )}
                </li>
              </ul>
              {/* Header Icons */}
              <div className="hidden xl:flex  space-x-5 items-center">
                {!currentUser && !isAuthenticated ? (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"

                    >
                      Sign In
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"

                    >
                      Sign Up
                    </Link>
                    <li className="ml-2 lg:ml-4 relative inline-block">
                      <Link className="" to="cart">
                        <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                          {cartState.cartItems.length}
                        </div>
                        <BsFillCartFill size={30} />
                      </Link>
                    </li>
                  </>
                ) : (
                  <>

                    {
                      currentUser && currentUser.isAdmin ? null : (
                        <><div>
                          <nav className="contents">
                            <ul className="ml-4 xl:w-48 flex items-center justify-end">
                              <li className="ml-2 lg:ml-4 relative inline-block">
                                <Link className="" to="/user">
                                  <FaUserCircle size={30} />
                                </Link>
                              </li>

                              <li className="ml-2 lg:ml-4 relative inline-block ">
                                <Link to="cart">
                                  <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                                    {cartState.cartItems.length}
                                  </div>
                                  <BsFillCartFill size={30} />
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div></>
                      )
                    }
                  </>


                )}

                {/* Sign In / Register      */}
              </div>
            </div>
            {/* Responsive navbar */}
            <Hidden mdUp>
              {!currentUser && !isAuthenticated ?
                <li className="ml-2 lg:ml-4 relative inline-block mt-4 mr-3">
                  <Link to="/login">
                    <AiOutlineLogin size={30} />
                  </Link>
                </li>
                :
                (
                  <li className="ml-2 lg:ml-4 relative inline-block mt-4 mr-3">
                    <Link to="/user">
                      <FaUserCircle size={30} />
                    </Link>
                  </li>
                )

              }
              <li className="ml-3 mt-8 mb-8 mr-6 lg:ml-4 relative inline-block flex items-center">
                <Link to='/cart'>
                  <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                    {cartState.cartItems.length}
                  </div>
                  <BsFillCartFill size={30} /></Link>
              </li>
            </Hidden>

            <Hidden mdUp>
              <button
                type="button"
                className="navbar-burger self-center mr-12 xl:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
                alt='humburger menu toggle'
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </Hidden>

          </nav>
          {isMobileMenuOpen && (
            <div className={`fixed top-0 left-0 w-full h-full bg-black z-40 backdrop-filter backdrop-blur-lg bg-opacity-70`} />

          )}

          <div
            className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } z-50`}
          >
            <button
              className="text-white absolute top-4 right-4 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <FiX size={35} />
            </button>
            {/* off canvas */}
            <ul className="flex flex-col items-start space-y-4  p-4 text-white">

              <MdFastfood className="text-4xl text-blue-600 flex justify-center items-center ml-16 mb-1" />


              <li className="flex items-center mt-3">
                <FaHome size={18} className="mr-5 text-white" />
                <Link to="/" className=" text-white" onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className="flex items-center">
                <BiDish size={18} className="mr-5" />
                <Link to="/menu" onClick={closeMobileMenu}>All Menu</Link>
              </li>
              <li className="flex items-center">
                <MdSell size={18} className="mr-5" />
                <Link to="/seller" onClick={closeMobileMenu}>Become a Seller</Link>
              </li>

              <li className="flex items-center">
                <GrCheckboxSelected size={18} className="mr-5 bg-white" />
                <Link to="/company/why" onClick={closeMobileMenu}>Why Choose Us</Link>
              </li>
              <li className="flex items-center">
                <GrOrganization size={18} className="mr-5 bg-white" />
                <Link to="/company" onClick={closeMobileMenu}>Organization </Link>
              </li>
              <li className="flex items-center ">
                <MdContactPhone size={18} className="mr-5" />
                <Link to="/contact" onClick={closeMobileMenu} >Contact</Link>
              </li>
              {currentUser || isAuthenticated ? (
                <>
                  <li className="flex items-center">
                    <FaUserCircle size={25} className="mr-2" />

                    <Link
                      to="/user"
                      className="pl-3 pr-4 text-gray-100 rounded cursor-pointer " onClick={closeMobileMenu}
                    >
                      {isAuthenticated ? (
                        <>{user && user.name}</>
                      ) : (
                        <>{currentUser && currentUser.name}</>
                      )}
                    </Link>

                  </li>
                  <li className="flex items-center">
                    <BsBox2HeartFill size={18} className="mr-2" />

                    <Link
                      to="/order"
                      className=" pl-3 pr-4 text-gray-100 rounded cursor-pointer " onClick={closeMobileMenu}

                    >
                      My Orders
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-center">
                    <AiOutlineLogin size={18} className="mr-2 bg-white" />

                    <Link
                      to="/login"
                      className=" pl-3 pr-4 text-gray-100 rounded cursor-pointer " onClick={closeMobileMenu}

                    >
                      Login
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <GrUserNew size={18} className="mr-2 bg-white" />

                    <Link
                      to="/register"
                      className=" pl-3 pr-4 text-gray-100 rounded cursor-pointer " onClick={closeMobileMenu}

                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
