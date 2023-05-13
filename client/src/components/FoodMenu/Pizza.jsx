import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { Card, Button, Modal } from "react-bootstrap";
import { addToCart } from "../../action/cartAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import Alert from 'react-bootstrap/Alert';
import { FaCheckCircle } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
    setShowAlert(true); // Show the alert

  };

  

  const varientOptions = pizza.varients.map((varient) => (
    <option key={varient}>{varient}</option>
  ));

  const quantityOptions = [...Array(10).keys()].map((v, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ));

  const price = pizza.prices[0][varient] * quantity;

  // auto dismissal
  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000); // Hide the alert after 1.5 seconds
    }
    return () => clearTimeout(timeout);
  }, [showAlert])



  //


  return (
    <>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible className="d-flex align-items-center">
          <FaCheckCircle size={20} className="me-2 d-inline-block" />
          <span className="d-inline-block">Pizza added to cart.</span>
        </Alert>
      )}
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden my-3 border border-gray-300">


        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={pizza.image}
            alt="Product"
            className="w-full"
            onClick={() => setShowModal(true)}
            style={{ cursor: "pointer" }}
          />
          <div className="absolute bottom-0 right-0 mr-2 mb-2 bg-yellow-500 text-black px-2 py-1 rounded-md text-sm font-bold">
            <FontAwesomeIcon icon={faRupeeSign} /> {" "} {pizza.prices[0][varient] * quantity}
          </div>
        </motion.div>
        <div className="py-4 px-6">
          <h2 className="text-lg font-semibold text-gray-800 text-center">{pizza.name}</h2>
          {/* <p className="mt-1 text-sm text-gray-600">
          Product Name
          </p> */}
          <hr />
          <div className="mt-4">
            <label htmlFor="size" className="block text-gray-700 font-bold">
              Size
            </label>
            <select
              id="size"
              name="size"
              value={varient}
              onChange={(e) => setVarient(e.target.value)}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              {varientOptions}

            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="quantity" className="block text-gray-700 font-bold">
              Quantity
            </label>

            <select
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {quantityOptions}
            </select>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              onClick={addToCartHandler}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded  "
            >
              <FaCartPlus className="inline-block mr-2 mb-1" />
              Add to Cart
            </button>


          </div>
        </div>
      </div>



     {/* //Modal */}
     <div>
     

      <div
        className={`fixed z-10 inset-0 overflow-y-auto ${
          showModal ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all my-4 max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Modal Title</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                aria-label="Close"
              >
                <ImCross/>
              </button>
            </div>

           <p>{pizza.name}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Pizza;


