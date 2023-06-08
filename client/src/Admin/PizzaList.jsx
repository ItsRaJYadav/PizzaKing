// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import { Table } from "react-bootstrap";
// import { deletePizza, getAllPizzas } from "../action/pizzaAction";
// import './style.css'

// import { Link } from "react-router-dom";
// import Loader from "./Loader";

// const Pizzaslist = () => {
//   const dispatch = useDispatch();
//   const pizzastate = useSelector((state) => state.getAllPizzaReducer);
//   const { loading, pizzas, error } = pizzastate;
//   console.log(pizzas);
//   useEffect(() => {
//     dispatch(getAllPizzas());
//   }, [dispatch]);
//   return (
//     <>
//       {loading ? (
//         <div>
//           <Loader />
//         </div>
//       ) : error ? (
//         <div>Error while fetching pizzas {error}</div>
//       ) : (
//         <>
//           <table className="border-collapse w-full">
//             <thead>
//               <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
//                 <th className="py-3 px-6 text-left">#</th>
//                 <th className="py-3 px-6 text-left">Food Name</th>
//                 <th className="py-3 px-6 text-center">Prices</th>
//                 <th className="py-3 px-6 text-center">Category</th>
//                 <th className="py-3 px-6 text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-600 text-sm font-light">
//               {pizzas &&
//                 pizzas.map((FoodItems, index) => (
//                   <tr
//                     key={index}
//                     className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
//                   >
//                     <td className="py-3 px-6 text-left whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="mr-2">
//                           <img
//                             className="w-6 h-6 rounded-full"
//                             src={FoodItems.image}
//                             alt={FoodItems.name}
//                           />
//                         </div>
//                         <span>{index + 1}</span>
//                       </div>
//                     </td>
//                     <td className="py-3 px-6 text-left">
//                       <div className="flex items-center">
//                         <span>{FoodItems.name}</span>
//                       </div>
//                     </td>
//                     <td className="py-3 px-6 text-center">
//                       <div className="flex items-center justify-center">
//                         <span className="mx-2">
//                           Small: {FoodItems.prices[0]["small"]}
//                         </span>
//                         <span className="mx-2">
//                           Medium: {FoodItems.prices[0]["medium"]}
//                         </span>
//                         <span className="mx-2">Large: {FoodItems.prices[0]["large"]}</span>
//                       </div>
//                     </td>
//                     <td className="py-3 px-6 text-center">
//                       <span
//                         className={`py-1 px-3 rounded-full text-xs ${
//                           FoodItems.category === "vegetarian"
//                             ? "bg-vegetarian"
//                             : FoodItems.category === "mix"
//                               ? "bg-meat"
//                               : FoodItems.category === "burger"
//                                 ? "bg-seafood"
//                                 : FoodItems.category === "drinks"
//                                   ? "bg-special"
//                                   :
//                                   FoodItems.category === "fries"
//                                   ? "bg-fries":
//                                   FoodItems.category === "thali"
//                                   ? "bg-mix":
//                                   FoodItems.category === "pizza"
//                                   ? "bg-thali"
//                                   : ""
//                           }`}
//                       >
//                         {FoodItems.category}
//                       </span>

//                     </td>
//                     <td className="py-3 px-6 text-center">
//                       <div className="flex item-center justify-center">
//                         <Link to={`/admin/editpizza/${FoodItems._id}`}>
//                           <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                             Edit
//                           </button>
//                         </Link>
//                         <button
//                           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                           onClick={() => {
//                             dispatch(deletePizza(FoodItems._id));
//                           }}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>

//         </>
//       )}
//     </>
//   );
// };

// export default Pizzaslist;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deletePizza, getAllPizzas, getPizzaById } from "../action/pizzaAction";
import "./style.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Pizzaslist = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filterPizzas = (query, category) => {
    const filteredPizzas = pizzas.filter((pizza) => {
      const matchName = pizza.name.toLowerCase().includes(query.toLowerCase());
      const matchCategory = category === "All" || pizza.category === category;
      return matchName && matchCategory;
    });
    setSearchResults(filteredPizzas);
  };

  const handleFilterPizzas = () => {
    if (searchQuery.trim() === "" && categoryFilter === "All") {
      setSearchResults(pizzas);
    } else {
      filterPizzas(searchQuery, categoryFilter);
    }
  };

  const handleDeletePizza = (pizzaId) => {
    dispatch(deletePizza(pizzaId));
  };

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  useEffect(() => {
    setSearchResults(pizzas);
  }, [pizzas]);

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
          <div className="mb-4 flex justify-center items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              className="bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full px-4 py-2"
              placeholder="Search dish"
            />
            <select
              value={categoryFilter}
              onChange={handleCategoryFilterChange}
              className="bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full px-4 py-2 ml-2"
            >
              <option value="All">All Categories</option>
              <option value="mix">Mix</option>
              <option value="burger">Burger</option>
              <option value="drinks">Drinks</option>
              <option value="fries">Fries</option>
              <option value="thali">Thali</option>
              <option value="pizza">Pizza</option>
            </select>
            <button
              onClick={handleFilterPizzas}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Filter
            </button>
          </div>


          <table className="border-collapse w-full">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Food Name</th>
                <th className="py-3 px-6 text-center">Prices</th>
                <th className="py-3 px-6 text-center">Category</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {searchResults.map((FoodItems, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6 rounded-full"
                          src={FoodItems.image[0]}
                          alt={FoodItems.name}
                        />
                      </div>
                      <span>{index + 1}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{FoodItems.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <span className="mx-2">
                        Small: {FoodItems.prices[0]["small"]}
                      </span>
                      <span className="mx-2">
                        Medium: {FoodItems.prices[0]["medium"]}
                      </span>
                      <span className="mx-2">
                        Large: {FoodItems.prices[0]["large"]}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span
                      className={`py-1 px-3 rounded-full text-xs ${FoodItems.category === "vegetarian"
                          ? "bg-vegetarian"
                          : FoodItems.category === "mix"
                            ? "bg-meat"
                            : FoodItems.category === "burger"
                              ? "bg-seafood"
                              : FoodItems.category === "drinks"
                                ? "bg-special"
                                : FoodItems.category === "fries"
                                  ? "bg-fries"
                                  : FoodItems.category === "thali"
                                    ? "bg-mix"
                                    : FoodItems.category === "pizza"
                                      ? "bg-thali"
                                      : ""
                        }`}
                    >
                      {FoodItems.category}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <Link to={`/admin/editpizza/${FoodItems._id}`}>
                        <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDeletePizza(FoodItems._id)}
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

