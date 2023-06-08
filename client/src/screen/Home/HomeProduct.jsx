import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from '../../action/pizzaAction';
import Error from "../../Alerts/Error";
import Loader from "../../Alerts/Loader";
import Filters from "../../components/FilterData/Filters";
import { Helmet } from "react-helmet";
import Pizza from '../../components/FoodMenu/Pizza';

const Home = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;

  const [category, setCategory] = useState(null);

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  const filteredPizzas = category
    ? pizzas.filter(pizza => pizza.category === category)
    : pizzas;
  const uniqueCategories = [...new Set(pizzas.map(pizza => pizza.category))];

  return (
    <>
      <Helmet>
        <title>All Menu</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-5">
          <Filters onCategoryChange={setCategory} />
        </div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error>Error while fetching pizzas {error}</Error>
        ) : (
          <div className="py-8">
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {uniqueCategories.map(category => {
                const categoryPizzas = filteredPizzas.filter(pizza => pizza.category === category);
                return categoryPizzas.length > 0 ? (
                  <div key={category} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                    <Pizza pizza={categoryPizzas[0]} />
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}
        
      </div>
    </>
  );
};

export default Home;
