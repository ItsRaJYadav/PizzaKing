import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deletePizza, getAllPizzas } from "../action/pizzaAction";
import './style.css'

import { Link } from "react-router-dom";
import Loader from "./Loader";

const Pizzaslist = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  console.log(pizzas);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : error ? (
        <div>Error while fetching pizzas {error}</div>
      ) : (
        <>
          <table className="border-collapse w-full">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Pizza Name</th>
                <th className="py-3 px-6 text-center">Prices</th>
                <th className="py-3 px-6 text-center">Category</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {pizzas &&
                pizzas.map((pizza, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img
                            className="w-6 h-6 rounded-full"
                            src={pizza.image}
                            alt={pizza.name}
                          />
                        </div>
                        <span>{index + 1}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>{pizza.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <span className="mx-2">
                          Small: {pizza.prices[0]["small"]}
                        </span>
                        <span className="mx-2">
                          Medium: {pizza.prices[0]["medium"]}
                        </span>
                        <span className="mx-2">Large: {pizza.prices[0]["large"]}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span
                        className={`py-1 px-3 rounded-full text-xs ${
                          pizza.category === "vegetarian"
                            ? "bg-vegetarian"
                            : pizza.category === "pizza"
                              ? "bg-meat"
                              : pizza.category === "burger"
                                ? "bg-seafood"
                                : pizza.category === "drinks"
                                  ? "bg-special"
                                  :
                                  pizza.category === "fries"
                                  ? "bg-fries":
                                  pizza.category === "mix"
                                  ? "bg-mix":
                                  pizza.category === "thali"
                                  ? "bg-thali"
                                  : ""
                          }`}
                      >
                        {pizza.category}
                      </span>

                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <Link to={`/admin/editpizza/${pizza._id}`}>
                          <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Edit
                          </button>
                        </Link>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => {
                            dispatch(deletePizza(pizza._id));
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

        </>
      )}
    </>
  );
};

export default Pizzaslist;

