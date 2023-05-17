

import {BsLinkedin,BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
      <div>
        <p className="text-base text-gray-500">Company</p>
        <ul className="mt-8 space-y-4">
          <li>
            <Link
              to='/company/about'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              About{" "}
            </Link>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Features{" "}
            </a>
          </li>
          <li>
            <Link
              to='/company/service'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Service{" "}
            </Link>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Career{" "}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-base text-gray-500">Help</p>
        <ul className="mt-8 space-y-4">
          <li>
            <Link
              to='/contact'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Customer Support{" "}
            </Link>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Delivery Details{" "}
            </a>
          </li>
          <li>
            <Link to='/privacy'
              
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Terms &amp; Conditions{" "}
            </Link>
          </li>
          <li>
            <Link
              to='/privacy'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Privacy Policy{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-base text-gray-500">User</p>
        <ul className="mt-8 space-y-4">
          <li>
            <Link
              to='/user'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Account{" "}
            </Link>
          </li>
          <li>
            <Link to='/user/orders'
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Orders Details{" "}
            </Link>
          </li>
          <li>
            <Link to='user/orders'
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Track Orders{" "}
            </Link>
          </li>
          <li>
            <Link to='/user'
              
             
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Setting{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-base text-gray-500">Cities</p>
        <ul className="mt-8 space-y-4">
          <li>
            <Link
              to='/'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Faridabad{" "}
            </Link>
          </li>
          <li>
            <Link
              to='/'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              New Delhi{" "}
            </Link>
          </li>
          <li>
            <Link
              to='/'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Patna{" "}
            </Link>
          </li>
          <li>
            <Link to='/'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Noida{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <hr className="mt-16 mb-10 border-gray-800" />
    <div className="flex flex-wrap items-center justify-between">
      {/* <img
        className="h-8 auto md:order-1"
        src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg"
        alt=""
      /> */}
      <ul className="flex items-center space-x-3 md:order-3">
        <li>
          <a
            href='https://twitter.com/rajydv07_'
            title=""
            className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
          >
            <AiFillTwitterCircle  size={50}/>
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/IamRAJAO9'
            title=""
            className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
          >
            <BsFacebook size={30}/>
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/rajydv07/'
            title=""
            className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
          >
            <BsLinkedin size={30}/>
          </a>
        </li>
        <li>
          <a
            href='abc'
            title=""
            className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
          >
            <BsLinkedin size={30}/>
              
          </a>
        </li>
      </ul>
      <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
        © Copyright 2021, All Rights Reserved by PizzaKing
      </p>
    </div>
  </div>
</section>


    </>
  )
}

export default Footer