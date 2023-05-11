import React from 'react'
import Testimonial from './Testimonial'
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <>
      <Testimonial />
     
      <section className="bg-blue-600 2xl:py-24 2xl:bg-white">
<div className="px-4 mx-auto overflow-hidden bg-blue-600 max-w-7xl sm:px-6 lg:px-8">
  <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
    <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
      <div>
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Use mobile app for better performance</h2>
        <p className="mt-4 text-base text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

        <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
          <Link to='/stayTunned' title="" className="flex" role="button">
            <img className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg" alt="" />
          </Link>

          <Link to='/stayTunned' title="" className="flex" role="button">
            <img className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg" alt="" />
          </Link>
        </div>
      </div>

      <div className="relative px-12">

        <img className="relative  -mb-60 lg:-mb-64" src="https://www.softsuave.com/blog/wp-content/uploads/2020/07/Food-Delivery-App-Development-Services-997x1024.png" alt="" />
      </div>
    </div>

  </div>

</div>


</section>

      <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Questions &amp; Answers
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
              Explore the common questions and answers about PizzaKing
            </p>
          </div>
          <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  How to create an account?
                </p>
                <p className="mt-4 text-base text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                  sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  How can I make payment?
                </p>
                <p className="mt-4 text-base text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                  sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  Do you provide discounts?
                </p>
                <p className="mt-4 text-base text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                  sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  How do you provide support?
                </p>
                <p className="mt-4 text-base text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                  sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-12 md:mt-20">
            <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
              <p className="text-gray-50">
                Didn’t find the answer you are looking for?{" "}
                <Link

                  to='/contact'
                  className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
                >
                  Contact our support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default FAQ