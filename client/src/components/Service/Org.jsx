import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function ButtonRow() {
  return (
    <div className="bg-gray-900 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 lg:px-0">
        
        <div className="flex justify-center md:justify-end">
          <Link to='/company/about' className="mx-4 text-gray-300 hover:text-white">
            About
          </Link>
          <Link to='/company/why' className="mx-4 text-gray-300 hover:text-white">
            Why Choose Us
          </Link>
          <Link to='/company/service' className="mx-4 text-gray-300 hover:text-white">
            Avaliable Cities
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        <div className="flex-1 bg-white p-8">
          <Outlet />
        </div>
        
      </div>
    </div>
  );
}

export default ButtonRow;
