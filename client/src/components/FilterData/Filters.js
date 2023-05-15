import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizza } from "../../action/pizzaAction";

const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state.filteredData);

  useEffect(() => {
    if (searchkey.length >= 3) {
      dispatch(filterPizza(searchkey, category));
    }
  }, [searchkey, category, dispatch]);

  return (
    <>
      <div className="p-4 bg-info mt-4">
        <form className="flex items-center">
          <input
            className="w-64 px-4 py-2 mr-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={searchkey}
            onChange={(e) => setsearchkey(e.target.value)}
            placeholder="Search pizza"
          />

          <select
            className="px-4 py-2 mr-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option>All</option>
            <option>veg</option>
            <option>nonveg</option>
          </select>

          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => {
              dispatch(filterPizza(searchkey, category));
            }}
          >
            Search
          </button>
        </form>

        {filteredData && filteredData.length === 0 && searchkey.length >= 3 && (
          <p>No data found.</p>
        )}
      </div>
      <div className="min-h-30vh bg-gray-100 flex items-center justify-center ">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              Food Categories
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            <div
              variant={category === "pizza" ? "primary" : "outline-primary"}
              onClick={() => {
                setcategory("pizza");
                dispatch(filterPizza(searchkey, "pizza"));
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer "
            >
              <div className="p-4">
                <div className="uppercase tracking-wide text-gray-600 font-bold text-xs">
                  Pizza
                </div>
              </div>
            </div>

            <div
              variant={category === "burger" ? "primary" : "outline-primary"}
              onClick={() => {
                setcategory("burger");
                dispatch(filterPizza(searchkey, "burger"));
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer "
            >
              <div className="p-4">
                <div className="uppercase tracking-wide text-gray-600 font-bold text-xs">
                  Burger
                </div>
              </div>
            </div>

            <div
              variant={category === "fries" ? "primary" : "outline-primary"}
              onClick={() => {
                setcategory("fries");
                dispatch(filterPizza(searchkey, "fries"));
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
            >
              <div className="p-4">
                <div className="uppercase tracking-wide text-gray-600 font-bold text-xs">
                  Fries
                </div>
              </div>
            </div>

            <div
              variant={category === "drinks" ? "primary" : "outline-primary"}
              onClick={() => {
                setcategory("drinks");
                dispatch(filterPizza(searchkey, "drinks"));
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
            >
              <div className="p-4">
                <div className="uppercase tracking-wide text-gray-600 font-bold text-xs">
                  Drinks
                </div>
              </div>
            </div>

            <div
              variant={category === "thali" ? "primary" : "outline-primary"}
              onClick={() => {
                setcategory("thali");
                dispatch(filterPizza(searchkey, "thali"));
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
            >
              <div className="p-4">
                <div className="uppercase tracking-wide text-gray-600 font-bold text-xs">
                  Indian Thali
                </div>
              </div>
            </div>

            <div
              variant={category === "mix" ? "primary" : "outline-primary"}
              onClick={() => {
                setcategory("mix");
                dispatch(filterPizza(searchkey, "mix"));
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
            >
              <div className="p-4">
                <div className="uppercase tracking-wide text-gray-600 font-bold text-xs">
                  Mix Food
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
