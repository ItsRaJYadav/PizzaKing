import React from 'react'
import Testimonial from './Testimonial'
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <>
      <section className="relative py-20 overflow-hidden bg-gray-50">
        <img
          className="absolute top-0 left-0 mt-44"
          src="https://img.freepik.com/free-vector/fast-food-set_1284-17362.jpg?w=740&t=st=1683979761~exp=1683980361~hmac=a20ab93a123ad4e1a4231607cdb62ca8bd3f02a1da0d9b054a559e139809b216"
          alt=""
        />
        <img
          className="absolute top-0 right-0 mt-10"
          src="https://img.freepik.com/free-vector/vector-cartoon-illustration-traditional-set-fast-food-meal_1441-331.jpg?size=626&ext=jpg"
          alt=""
        />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                FREQUENTLY ASK QUESTION
              </span>
              <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900">
                <span>You ask? We</span>
                <span className="font-serif italic">answer</span>
              </h1>
            </div>
            <div className="pt-18 sm:pt-24 px-8 sm:px-20 pb-18 bg-white rounded-4xl shadow-lg">
              <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
                <div className="max-w-xl pr-5">
                  <h3 className="text-xl font-semibold text-orange-900 mb-3">
                    What is PizzaKing ?
                  </h3>
                  <p className="text-lg text-gray-500">
                  Pizza King web app is an online platform for ordering pizzas. It offers a range of pizzas, sides, drinks, and desserts with an easy-to-use ordering system and delivery options.
                  </p>
                </div>
                <div className="pt-1">
                  <span>
                    <svg
                      width={17}
                      height={3}
                      viewBox="0 0 17 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                        fill="#FF460C"
                      />
                    </svg>
                  </span>
                </div>
              </button>
              <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
                <div className="max-w-xl pr-5">
                  <h3 className="text-xl font-semibold text-black group-hover:text-orange-900">
                  Can I order from 2 or more restaurants at the same time?
                  </h3>
                  <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                  Yes, of course!
However each restaurant order will be treated as a different order. So the delivery charges may be applicable for each order.
                  </p>
                </div>
                <div className="pt-1">
                  <span className="hidden group-hover:block">
                    <svg
                      width={17}
                      height={3}
                      viewBox="0 0 17 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                        fill="#FF460C"
                      />
                    </svg>
                  </span>
                  <span className="block group-hover:hidden">
                    <svg
                      width={17}
                      height={16}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </button>
              <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
                <div className="max-w-xl pr-5">
                  <h3 className="text-xl font-semibold text-black group-hover:text-orange-900">
                  How do I place an order?
                  </h3>
                  <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                  You can place an order on the PizzaKing website by selecting the items you want to order and entering your delivery address. Once you have entered your payment details, your order will be confirmed and delivered to you.
                  </p>
                </div>
                <div className="pt-1">
                  <span className="hidden group-hover:block">
                    <svg
                      width={17}
                      height={3}
                      viewBox="0 0 17 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                        fill="#FF460C"
                      />
                    </svg>
                  </span>
                  <span className="block group-hover:hidden">
                    <svg
                      width={17}
                      height={16}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </button>
              <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
                <div className="max-w-xl pr-5">
                  <h3 className="text-xl font-semibold text-black group-hover:text-orange-900">
                  What are the delivery hours?
                  </h3>
                  <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                  PizzaKing offers delivery service from 11:00 AM to 11:00 PM, seven days a week.
                  </p>
                </div>
                <div className="pt-1">
                  <span className="hidden group-hover:block">
                    <svg
                      width={17}
                      height={3}
                      viewBox="0 0 17 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                        fill="#FF460C"
                      />
                    </svg>
                  </span>
                  <span className="block group-hover:hidden">
                    <svg
                      width={17}
                      height={16}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </button>
              <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
                <div className="max-w-xl pr-5">
                  <h3 className="text-xl font-semibold text-black group-hover:text-orange-900">
                  How long does it take for an order to be delivered?
                  </h3>
                  <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                  The delivery time depends on your location and the items you ordered. Typically, it takes around 30-45 minutes for your order to be delivered.
                  </p>
                </div>
                <div className="pt-1">
                  <span className="hidden group-hover:block">
                    <svg
                      width={17}
                      height={3}
                      viewBox="0 0 17 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                        fill="#FF460C"
                      />
                    </svg>
                  </span>
                  <span className="block group-hover:hidden">
                    <svg
                      width={17}
                      height={16}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </button>
              <button className="flex group w-full items-start justify-between text-left">
                <div className="max-w-xl pr-5">
                  <h3 className="text-xl font-semibold text-black group-hover:text-orange-900">
                  Is there a minimum order value for delivery?
                  </h3>
                  <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                  Yes, there is a minimum order value for delivery, which varies depending on your location. Please check the website for more information.
                  </p>
                </div>
                <div className="pt-1">
                  <span className="hidden group-hover:block">
                    <svg
                      width={17}
                      height={3}
                      viewBox="0 0 17 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                        fill="#FF460C"
                      />
                    </svg>
                  </span>
                  <span className="block group-hover:hidden">
                    <svg
                      width={17}
                      height={16}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default FAQ