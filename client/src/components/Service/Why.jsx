import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const reasons = [
  {
    title: "Quality Ingredients",
    description: "We use only the freshest and highest quality ingredients in our dishes.",
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
  },
  {
    title: "Fast Delivery",
    description: "Our speedy delivery service ensures your food arrives hot and fresh.",
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
  },
  {
    title: "Easy Online Ordering",
    description: "Ordering from our website is simple and hassle-free.",
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
  },
  {
    title: "Wide Range of Cuisine",
    description: "We offer a diverse range of cuisines to satisfy any craving.",
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
  },
  {
    title: "Customizable Orders",
    description: "Personalize your order to your liking with our easy customization options.",
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
  },
  {
    title: "Secure Payment",
    description: "We prioritize the safety and security of our customers' payment information.",
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
  },
  {
    title: "Affordable Pricing",
    description: "We believe that good food shouldn't come at a premium. That's why we offer affordable pricing on all our menu items, without compromising on quality or taste.",
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
  },
  {
    title: "Convenience",
    description: "Enjoy delicious food delivered fast to your doorstep with our easy-to-use ordering system and mobile app, saving you time and hassle of cooking.",
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
  },
  {
    title: "Personalized Service:",
    description: "We offer personalized service to every customer, catering to special requests and dietary restrictions to ensure complete satisfaction.",
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
  },
];

function WhyChooseUs() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Delicious food delivered right to your doorstep
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We are committed to providing the best possible experience for our customers. Here are some of the reasons why we are the go-to choice for food delivery.
          </p>
        </div>
        <div className="mt-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reasons.map((reason) => (
              <li key={reason.title}>
                <div className="flex">
                  <div className="flex-shrink-0">{reason.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{reason.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{reason.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
