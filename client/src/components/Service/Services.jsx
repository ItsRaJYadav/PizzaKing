import React from 'react';
import { Link } from 'react-router-dom';
import cities from './Cities';

const ServicesByCityPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Services Available in Different Cities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cities.map(city => (
            <Link key={city.id} to={`https://en.wikipedia.org/wiki/${city.name}`} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-40 sm:h-56 bg-cover bg-center" style={{ backgroundImage: `url(${city.image})` }} />
              <div className="px-4 py-2">
                <h2 className="text-lg font-bold ">{city.name}</h2>
               
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesByCityPage;
