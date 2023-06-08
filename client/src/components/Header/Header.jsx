import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Hidden } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { filterPizza } from "../../action/pizzaAction";
import locationData from "./Location.json";


const Header = () => {
  const { isAuthenticated } = useAuth0();

  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);




  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredResults = filterPizza.filter((item) => {

      return item.name.toLowerCase().includes(query.toLowerCase());
    });

    setSearchResults(filteredResults);
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    // Retrieve stored values from localStorage on component mount
    const storedState = localStorage.getItem("selectedState");
    const storedCity = localStorage.getItem("selectedCity");

    if (storedState) {
      setSelectedState(storedState);
      const selectedStateObj = locationData.find((loc) => loc.state === storedState);
      const stateCities = selectedStateObj ? selectedStateObj.cities : [];
      setCities(stateCities);
    }

    if (storedCity) {
      setSelectedCity(storedCity);
    }
  }, []);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    localStorage.setItem("selectedState", state); // Store selected state in localStorage

    const selectedStateObj = locationData.find((loc) => loc.state === state);
    const stateCities = selectedStateObj ? selectedStateObj.cities : [];
    setCities(stateCities);
    setSelectedCity("");
    localStorage.removeItem("selectedCity"); // Remove stored city from localStorage
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    localStorage.setItem("selectedCity", city); // Store selected city in localStorage
  };

  return (
    <>
      <div className="flex flex-wrap place-items-center  overflow-hidden">
        <section className="relative min-h-10vh ">
          {/* navbar */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
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

                      {/* Location Fields */}
                      <div className="flex items-center ml-5">
                        <select
                          value={selectedState}
                          onChange={handleStateChange}
                          className="bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full px-4 py-2"
                        >
                          <option value="">Select State</option>
                          {locationData.map((loc) => (
                            <option key={loc.state} value={loc.state}>
                              {loc.state}
                            </option>
                          ))}
                        </select>
                        {selectedState && (
                          <div className="ml-3">
                            <select
                              value={selectedCity}
                              onChange={handleCityChange}
                              className="bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full px-4 py-2"
                            >
                              <option value="">Select City</option>
                              {cities.map((city) => (
                                <option key={city} value={city}>
                                  {city}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>

                       {/* searchbox */}
                      <div className="relative ml-5">
                        <input
                          type="text"
                          placeholder="Search for Cuisine and Dish..."
                          value={searchQuery}
                          onChange={handleSearch}
                          className="bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full px-4 py-2 w-64"
                        />
                        <div className="absolute right-3 top-2 mt-1.5">
                          <FaSearch className="text-gray-500 " />
                        </div>
                        {searchResults.length > 0 && (
                          <ul className="absolute left-0 right-0 bg-white shadow-lg rounded-lg mt-2">
                            {searchResults.map((result) => (
                              <li key={result.id} className="px-4 py-2">
                                {/* Display the search results */}
                                {result.title}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

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

                              <li className="ml-2 lg:ml-4 relative inline-block">
                                <Link className="" to="cart">
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
                        </div></>
                      )
                    }
                  </>


                )}

                {/* Sign In / Register      */}
              </div>
            </div>
            {/* Responsive navbar */}
            <Link className="xl:hidden flex mr-6 items-center" to="/cart">
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
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                  {cartState.cartItems.length}
                </span>
              </span>
            </Link>
            <Hidden mdUp>
              <button
                type="button"
                className="navbar-burger self-center mr-12 xl:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
                alt='humburger menu toggle'
              >
                {isMenuOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </Hidden>
            {/* <a className="navbar-burger self-center mr-12 xl:hidden" >
              <CgMenuRound size={30} />
            </a> */}
          </nav>
          {isMenuOpen && (
            <div className="sm:hidden " id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/menu"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={toggleMenu}
                >
                  Menu
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <div className="ml-2 lg:ml-4 relative inline-block">
                  <Link className="" to="/user" onClick={toggleMenu}>
                    <FaUserCircle size={30} />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Header;
