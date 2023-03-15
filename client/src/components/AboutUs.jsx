import React from 'react'
import Developer from "../components/Developer"
import Footer from './Footer'
import { Link } from 'react-router-dom';

const AboutUs = () => {

 

  return (
    <>


      <>
        <div className="conainer">
          <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="font-bold text-4xl animate-pulse text-purple-500">Welcome To Pizza King</h1>
                <p className="font-italic text-muted mb-4">
                  Welcome to Pizza King! We are a fast-growing pizza delivery startup currently operating in 5 major cities across the country. Our goal is to bring delicious and freshly baked pizzas to as many people as possible, and we are constantly expanding to reach new customers. <br /> <br />

                  At Pizza King, we believe that pizza is not just a food, it's an experience. That's why we use only the freshest ingredients and make our pizzas with care and attention to detail.
                  <br /> <br />

                  As a startup, we are always looking for ways to improve and grow. We value our customers' feedback and take it seriously.
                  <br /> <br />
                  We are excited to be expanding to new cities in the coming months and can't wait to share our pizzas with even more people. Thank you for choosing Pizza King, and we look forward to serving you!






                </p>
                <div class="bg-gray-200 rounded-lg p-4">
                  <h2 class="text-2xl font-bold mb-2">Have any suggestions?</h2>
                  <p class="text-lg mb-4">We would love to hear from you! Your feedback helps us improve our service and bring you the best possible experience. </p>
                  {/* <a href="#" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">Leave a suggestion</a> */}
                  <Link to="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">Leave a suggestion</Link>

                </div>

              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img

                  src="https://www.yelowsoft.com/static/727ad1f9ebad7962717cbe8ec97b6d0e/78d47/on-demand-food-delivery-system-main.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-5">
          <div className="container py-5">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-2 order-lg-1">
                <i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
                <h2 className="font-weight-light">We have a customer support team that is available 24/7 to assist users with any issues or queries.</h2>
                <p className="font-italic text-muted mb-4">
                  We take the privacy and security of our users' information seriously. All information provided to us is kept secure and confidential.
                </p>
                <Link to="/privacy" className="btn btn-light px-5 rounded-pill shadow-sm">
                  Visit our Privacy and policy
                </Link>
              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img
                  src="https://www.i-lanamtechnologies.com/wp-content/uploads/2020/06/food.jpg"
                  alt=""
                  className="img-fluid mb-4 mb-lg-0"
                />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5 px-5 mx-auto" >
                <img
                  src="https://www.zoplay.com/blog/wp-content/uploads/2020/07/zoplay_1-01-3.png"
                  alt=""

                  className="img-fluid mb-4 mb-lg-0"
                />
              </div>
              <div className="col-lg-6">
                <i className="fa fa-leaf fa-2x mb-3 text-primary" />
                <h2 className="font-weight-light">Our Vision for the desiging this web App</h2>
                <p className="font-italic text-muted mb-4">
                  Our food delivery web application aims to provide a user-friendly platform with a wide range of restaurants, easy ordering, live order tracking, order customization, 24/7 customer support, sustainable practices, and promotions, delivering delicious meals right to your doorstep
                  <br />
                  <br />
                  We are committed to sustainable practices and will encourage eco-friendly packaging and support local businesses. We will offer promotions and discounts to attract more users and provide incentives for users to continue using our platform.
                  <br /> <br />

                  Our ultimate goal is to deliver delicious meals right to your doorstep while providing exceptional user experience, supporting sustainability, and contributing to the local community.
                </p>
                <Link to="/privacy" className="btn btn-light px-5 rounded-pill shadow-sm">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>









      </>



      <Developer />
      <Footer />
    </>
  )
}

export default AboutUs