import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa'
import { BsFillCartFill } from 'react-icons/bs'
import { FaBars, FaTimes } from "react-icons/fa";
import { Hidden } from "@mui/material";

const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>


      <div className="flex flex-wrap place-items-center  overflow-hidden">
        <section className="relative mx-auto">
          {/* navbar */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <Link to='/' className="text-3xl font-bold font-heading">
                {/* <img class="h-9" src="logo.png" alt="logo"> */}
                PizzaKing
              </Link>
              {/* Nav Links */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <NavLink to='/pizzas' className="hover:text-gray-200" href="#">
                    Menu
                  </NavLink>
                </li>
               
                <li>
                  <Link to='/company' className="hover:text-gray-200" href="#">
                    Company
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className="hover:text-gray-200" href="#">
                    Contact Us
                  </Link>
                </li>

                <li>
                  {currentUser && currentUser.isAdmin && <Link to='/admin' className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3">Admin Pannel</Link>}
                </li>
              </ul>
              {/* Header Icons */}
              <div className="hidden xl:flex  space-x-5 items-center">

                {
                  !currentUser ? (
                    <>
                      <Link to='/login'
                        className="block px-4 py-2 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                        href="#"
                      >
                        Sign In
                      </Link>
                      <Link to='/register'
                        className="block px-4 py-2 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                        href="#"
                      >
                        Sign Up
                      </Link>
                      <li className="ml-2 lg:ml-4 relative inline-block">
                        <Link className="" to='cart' >
                          <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                            {cartState.cartItems.length}
                          </div>
                          <BsFillCartFill size={30} />
                        </Link>
                      </li>
                    </>
                  ) : (
                    <div>
                      <nav className="contents">



                        <ul className="ml-4 xl:w-48 flex items-center justify-end">
                          <li className="ml-2 lg:ml-4 relative inline-block">
                            <Link className="" to='/user' >
                              <FaUserCircle size={30} />


                            </Link>
                          </li>


                          <li className="ml-2 lg:ml-4 relative inline-block">
                            <Link className="" to='cart'>
                              <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                                {cartState.cartItems.length}
                              </div>
                              <svg
                                className="h-9 lg:h-10 p-2 text-gray-500"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="shopping-cart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                                />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  )
                }






                {/* Sign In / Register      */}


              </div>
            </div>
            {/* Responsive navbar */}
            <a className="xl:hidden flex mr-6 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">{cartState.cartItems.length}</span>
              </span>
            </a>
            <Hidden mdUp>

              <button
                type="button"
                className="navbar-burger self-center mr-12 xl:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >

                {isMenuOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>

            </Hidden>
            {/* <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <CgMenuRound size={30} />
            </a> */}
          </nav>
          {isMenuOpen && (
            <div className="sm:hidden " id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </section>

      </div>

      
    </>

  )
}

export default Header