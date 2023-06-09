import React from 'react';
import { FaStar, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import Pic from '../assets/7055_appLogo_1024x1024.jpg'

const SellerDetailsPage = () => {
    const registeredProductRatings = 4.5;
    const reviewsCount = 15;
    const registeredSince = 'March 2019';
    const contactNumber = '1800 180 1111';
    const email = 'seller@pizzaking.com';
    const productQualityRating = 4.8;
    const isVerified = true;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img
                        src={Pic}
                        alt="Seller"
                        className="rounded-lg md:w-full md:h-auto mb-4"
                        style={{ width: '80%', height: '80%' }}
                    />
                </div>

                <div className="md:w-1/2 md:ml-8">
                    <h2 className="text-2xl font-semibold mb-4">Seller Name : <strong>PizzaKing</strong></h2>

                    <p className="text-lg mb-4">
                        PizzaKing is a renowned pizza joint that has been serving delicious and mouth-watering pizzas for over a decade. Our passion for quality ingredients and authentic flavors sets us apart from the rest. Each pizza is handcrafted with love, using only the freshest ingredients sourced from local farms.
                    </p>

                    <div className="flex items-center mb-4">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="text-lg mr-2">{registeredProductRatings}</span>
                        <span className="text-sm text-gray-600">
                            ({reviewsCount} reviews)
                        </span>
                    </div>
                    <p className="text-lg mb-4">
                        Registered since {registeredSince}
                    </p>
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-gray-600 mr-2" />
                        <span className="text-lg">{contactNumber}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="text-gray-600 mr-2" />
                        <span className="text-lg">{email}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-lg text-green-500 mr-2">Verified Seller</span>
                        {isVerified && (
                            <MdVerified
                                className="text-blue-500 text-2xl mr-2"
                                style={{ fontSize: '2rem' }}
                            />
                        )}
                    </div>
                    <div className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="text-lg">{productQualityRating}</span>
                        <span className="text-sm text-gray-600 ml-2">
                            Food Quality Rating
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDetailsPage;
