import React, { useState ,useEffect} from "react";
import { addPizza } from "../action/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "../Alerts/Error";
import Success from "../Alerts/sucess";
import { HiOutlineSelector } from 'react-icons/hi'

const AddNewPizza = () => {
  const [name, setname] = useState("");
  const [smallPrice, setsmallPrice] = useState();
  const [largeprice, setlargprice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const addPizzaState = useSelector((state) => state.addPizzaReducer);
  const { loading, error, success } = addPizzaState;
  const [succes, setSuccess] = useState(false);
  const [loadings, setLoading] = useState(false);
  const [errors, setError] = useState(false);
  

  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largeprice,
      },
    };
  
  setLoading(true);
    dispatch(addPizza(pizza))
      .then(() => {
        setLoading(false);
        setSuccess(true);
        resetForm();
        setTimeout(() => {
          setSuccess(false);
        }, 2000); // Timeout duration in milliseconds (e.g., 3000ms = 3 seconds)
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  const resetForm = () => {
    setname("");
    setimage("");
    setdescription("");
    setcategory("");
    setsmallPrice("");
    setmediumPrice("");
    setlargprice("");
  };
  

  
  return (
    <div>
      {loadings &&  <Loader />}
      {errors && error&& <Error error="add new pizza error" />}
      {succes && success && <Success success="Pizza Added Successfully" />}

      <form onSubmit={submitForm} className="bg-light p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 font-bold text-gray-700" htmlFor="formGridEmail">
              Name
            </label>
            <input 
              required
              className="w-full px-4 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="formGridEmail"
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block mb-2 font-bold text-gray-700" htmlFor="formGridCity">
              Small Price
            </label>
            <input
              required
              className="w-full px-4 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="formGridCity"
              type="text"
              value={smallPrice}
              onChange={(e) => setsmallPrice(e.target.value)}
              placeholder="Enter Small Price"
            />
          </div>
          <div>
            <label className="block mb-2 font-bold text-gray-700" htmlFor="formGridState">
              Medium Price
            </label>
            <input
              required
              className="w-full px-4 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="formGridState"
              type="text"
              value={mediumPrice}
              onChange={(e) => setmediumPrice(e.target.value)}
              placeholder="Enter medium price"
            />
          </div>
          <div>
            <label className="block mb-2 font-bold text-gray-700" htmlFor="formGridZip">
              Large Price
            </label>
            <input
              required
              className="w-full px-4 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="formGridZip"
              type="text"
              value={largeprice}
              onChange={(e) => setlargprice(e.target.value)}
              placeholder="Enter Large Price"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
              >
                <option value="burger">burger</option>
                <option value="fries">fries</option>
                <option value="mix">mix</option>
                <option value="drink">drinks</option>
                <option value="pizza">pizza</option>
                <option value="thali">thali</option>
               
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <HiOutlineSelector />
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-bold text-gray-700" htmlFor="formGridPassword">
              Image
            </label>
            <input
              required
              className="w-full px-4 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="formGridPassword"
              type="text"
              value={image}
              onChange={(e) => setimage(e.target.value)}
              placeholder="Add Image URL"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="formGridAddress1">
              Description
            </label>
            <textarea
            required
              className="w-full px-4 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="formGridAddress1"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Enter Description"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Add New
        </button>

      </form>


    </div>
  );
};

export default AddNewPizza;



