import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from '../../action/pizzaAction'
import { getAllUser } from '../../action/userAction'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Achievement = () => {
    const dispatch = useDispatch();
    const pizzastate = useSelector((state) => state.getAllPizzaReducer);
    const { pizzas } = pizzastate;

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch]);



    return (
        <>
            <section className="py-20 bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-white font-bold mb-8">HOW IT WORK</h2>
                    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
                        <div className="flex items-center">
                            <div className="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-gradient-to-br from-yellow-500 via-green-300 to-blue-500 text-sm font-bold">
                                1
                            </div>
                            <span className="font-bold text-white">Register & Login </span>
                        </div>
                        <span className="my-4 md:my-0 md:mx-8 lg:mx-16">
                            <BsFillArrowRightCircleFill color="white " size={20} />
                        </span>
                        <div className="flex items-center">
                            <div className="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-gradient-to-br from-yellow-500 via-green-300 to-blue-500 text-sm font-bold">
                                2
                            </div>
                            <span className="font-bold text-white">Shopping Cart</span>
                        </div>
                        <span className="my-4 md:my-0 md:mx-8 lg:mx-16">
                            <BsFillArrowRightCircleFill color="white " size={20} />
                        </span>
                        <div className="flex items-center">
                            <div className="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-gradient-to-br from-yellow-500 via-green-300 to-blue-500 text-sm font-bold">
                                3
                            </div>
                            <span className="font-bold text-white">Payment &amp; Delivery Options</span>
                        </div>
                        <span className="my-4 md:my-0 md:mx-8 lg:mx-16">
                            <BsFillArrowRightCircleFill color="white " size={20} />
                        </span>
                        <div className="flex items-center">
                            <div className="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-gradient-to-br from-yellow-500 via-green-300 to-blue-500 text-sm font-bold">
                                4
                            </div>
                            <span className="font-bold text-white">Order Placed</span>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 mt-3">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Numbers tell our story
                        </h2>
                        <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                            Below are the list of some Achievement done by the our organization in the recents years
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                        <div>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                                    {" "}
                                    {pizzas.length}+{" "}
                                </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">
                                Items Listed in our website
                            </p>
                            <p className="text-base mt-0.5 text-gray-500">
                                Creating the successful Items
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                                    {" "}
                                    4821+{" "}
                                </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">
                                Ordered delivered
                            </p>
                            <p className="text-base mt-0.5 text-gray-500">In last 1 years</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                                    {" "}
                                    30+{" "}
                                </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Team members</p>
                            <p className="text-base mt-0.5 text-gray-500">
                                Working for company success
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Achievement