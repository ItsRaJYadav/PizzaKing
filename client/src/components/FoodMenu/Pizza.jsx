import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from "../../action/cartAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { ImCross } from 'react-icons/im';
import { Typography, Button } from "@mui/material";
import { ArrowBack, FavoriteBorder, Favorite } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaStar, FaRupeeSign } from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import AddToCartAlert from '../../Alerts/ProductAddAlert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
    toast.success("Added to cart")
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
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

  // const toggleFavorite = () => {
  //   // Update the favorite status of the product
  //   product.isFavorite = !product.isFavorite;
  //   // TODO: Add logic to handle saving the favorite status
  // };
  const getRandomRating = () => {
    const ratingOptions = [3, 3.5, 4, 4.5];
    const randomIndex = Math.floor(Math.random() * ratingOptions.length);
    return ratingOptions[randomIndex];
  };



  const randomRating = getRandomRating();
  const isSingleImage = pizza.image.length === 1;



  return (
    <>

      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden my-3 border border-gray-300">


        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={pizza.image.length > 0 ? pizza.image[0] : ''}
            alt="DishImage1"
            className="w-full h-64 object-cover mx-auto"
            onClick={() => setShowModal(true)}
            style={{ cursor: "pointer" }}
          />


          <div className="absolute bottom-0 right-0 mr-2 mb-2 bg-yellow-500 text-black px-2 py-1 rounded-md text-sm font-bold">
            <FontAwesomeIcon icon={faRupeeSign} /> {" "} {pizza.prices[0][varient] * quantity}
          </div>
        </motion.div>
        <div className="py-4 px-6">
          <h2 className="text-lg font-semibold text-gray-800 text-center">{pizza.name}</h2>

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
      <div className={`fixed z-10 inset-0 overflow-y-auto ${showModal ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all my-4 w-full max-w-screen-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
              <ul className="flex">
                <li className="flex items-center mr-4">
                  <MdOutlineFastfood className="mr-2" />
                  <span>Product</span>
                </li>
                <li className="flex items-center mr-4">
                  <IoIosArrowDropright className="mr-2" />
                  <span>{pizza.category}</span>
                </li>
                <li className="flex items-center">
                  <IoIosArrowDropright className="mr-2" />
                  <span>{pizza.name}</span>
                </li>
              </ul>
              {showAlert && (
                <AddToCartAlert
                  message="Pizza added to cart."
                  onClose={handleCloseAlert}
                />
              )}
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                aria-label="Close"
              >
                <ImCross />
              </button>
            </div>
            {/* modal body */}
            <div className="container mx-auto py-8">
              <div className="flex items-center justify-between mb-4">
                <Button onClick={() => setShowModal(false)} variant="contained" startIcon={<ArrowBack />} className="mr-4">
                  Back
                </Button>
                <Typography variant="h5" component="h1" className="text-center">
                  {pizza.name}
                </Typography>
                <Button variant="outlined" startIcon={<FavoriteBorder />} className="mr-4">
                  Favorite
                </Button>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full md:w-2/5 mb-6 md:mb-0">
                  <Carousel showThumbs={false} showStatus={false} infiniteLoop>
                    {pizza.image.map((imageUrl, index) => (
                      <img key={index} src={imageUrl} alt={`DishImage ${index}`} />
                    ))}
                  </Carousel>
                </div>

                <div className="w-full md:w-3/5 md:pl-6">
                  <div className="mb-4">
                    <label htmlFor="size" className="block text-gray-700 font-bold">
                      Size
                    </label>
                    <select
                      id="size"
                      name="size"
                      value={varient}
                      onChange={(e) => setVarient(e.target.value)}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                    >
                      {varientOptions}
                    </select>

                    <div className="mt-4">
                      <label htmlFor="quantity" className="block text-gray-700 font-bold">
                        Quantity
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                      >
                        {quantityOptions}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center mt-4">
                    <Typography variant="h6">Rating:</Typography>
                    <div className="ml-2 flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={index < Math.floor(randomRating) ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <div className="font-bold ml-3">  Seller:</div>
                    {pizza.seller ? (
                      <p className={`text-green-500`}>{pizza.seller}</p>
                    ) : (
                      <p className={`text-blue-500`}> PizzaKing.Info</p>
                    )}

                  </div>
                  <div className="flex items-center mt-4">
                    <h6 className="mr-2">Price:</h6>
                    <div className="flex items-center">
                      <FaRupeeSign className="text-lg" />
                      <span className="text-lg ml-1">
                        {pizza.prices[0][varient] * quantity}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={addToCartHandler}
                    variant="contained"
                    color="primary"
                    className="mt-4 w-full"
                  >
                    Add to Cart
                  </Button>
                  <div className="mt-3.5">



                    <Typography variant="body1">
                      <details className="border border-gray-300 rounded-md overflow-hidden">
                        <summary className="bg-gray-200 px-4 py-2 cursor-pointer flex items-center transition-colors duration-300 hover:bg-gray-300">
                          Product Description
                        </summary>
                        <div className="px-4 py-2">
                          <p>{pizza.description}</p>
                        </div>
                      </details>
                    </Typography>
                  </div>
                  <div className="mt-3.5">
                    <Typography variant="body1">
                      <details className="border border-gray-300 rounded-md overflow-hidden">
                        <summary className="bg-gray-200 px-4 py-2 cursor-pointer flex items-center transition-colors duration-300 hover:bg-gray-300">
                          Refund Policy
                        </summary>
                        <div className="px-4 py-2">
                          <p className="ml-4">
                            PizzaKing will credit a refund to your account within 3-4 business days. You will get a refund if –
                            <ul className="list-decimal ml-8">
                              <li> The restaurant has not confirmed your order; it can be cancelled.</li>
                              <li> Damaged/tampered packaging at the time of delivery.</li>
                              <li> Pizzaking cancelled the order itself.</li>
                              <li> You cancelled due to unavailability of items in your order.</li>
                            </ul>
                          </p>
                        </div>

                      </details>
                    </Typography>
                  </div>



                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Pizza;


