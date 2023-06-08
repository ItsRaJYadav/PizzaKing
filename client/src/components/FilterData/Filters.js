
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
      <div className="p-4 bg-info mt-4 flex items-center justify-center">
        <form className="flex flex-col md:flex-row items-center">
          <input
            className="w-full md:w-96 px-4 py-2 mb-2 md:mb-0 mr-0 md:mr-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={searchkey}
            onChange={(e) => setsearchkey(e.target.value)}
            placeholder="Search pizza"
          />

          <select
            className="w-full md:w-auto px-4 py-2 mb-2 md:mb-0 md:ml-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option className="text-gray-600">All</option>
            <option className="text-gray-600">burger</option>
            <option className="text-gray-600">fries</option>
            <option className="text-gray-600">pizza</option>
            <option className="text-gray-600">drinks</option>
            <option className="text-gray-600">thali</option>
            <option className="text-gray-600">mix</option>
          </select>

        </form>

        {filteredData && filteredData.length === 0 && searchkey.length >= 3 && (
          <p className="text-white bg-red-500 px-4 py-2 rounded-md mt-2">
            No data found.
          </p>
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
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
              style={{
                backgroundImage: "url('https://static.toiimg.com/thumb/msid-87930581,width-1280,resizemode-4/87930581.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                setcategory("pizza");
                dispatch(filterPizza(searchkey, "pizza"));
              }}
            >
              <div className="p-4">
                <div className="uppercase tracking-wide text-gray-100 font-bold text-xs">
                  Pizza
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                setcategory("burger");
                dispatch(filterPizza(searchkey, "burger"));
              }}
            >
              <div className="p-4">
                <div className="uppercase tracking-wide text-gray-100 font-bold text-xs">
                  Burger
                </div>
              </div>
            </div>
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
              style={{
                backgroundImage: "url('https://britishpizza.in/wp-content/uploads/2021/08/French-Fries.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                setcategory("fries");
                dispatch(filterPizza(searchkey, "fries"));
              }}
            >
              <div className="p-4">
                <div className="uppercase tracking-wide text-gray-100 font-bold text-xs">
                  Fries
                </div>
              </div>
            </div>
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
              style={{
                backgroundImage: "url('https://images.eatsmarter.com/sites/default/files/styles/1600x1200/public/two-fruit-drinks-546036.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                setcategory("drinks");
                dispatch(filterPizza(searchkey, "drinks"));
              }}
            >
              <div className="p-4">
                <div className="uppercase tracking-wide text-gray-100 font-bold text-xs">
                  Drinks
                </div>
              </div>
            </div>
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
              style={{
                backgroundImage: "url('https://www.masalabox.com/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                setcategory("thali");
                dispatch(filterPizza(searchkey, "thali"));
              }}
            >
              <div className="p-4">
                <div className="uppercase tracking-wide text-gray-100 font-bold text-xs">
                  Indian Thali
                </div>
              </div>
            </div>
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
              style={{
                backgroundImage: "url('https://s30386.pcdn.co/wp-content/uploads/2020/02/p1droflv111ggm10p11634nlosi6.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                setcategory("mix");
                dispatch(filterPizza(searchkey, "mix"));
              }}
            >
              <div className="p-4">
                <div className="uppercase tracking-wide text-gray-100 font-bold text-xs">
                  Mix Foods
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

