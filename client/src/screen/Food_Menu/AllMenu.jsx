import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@mui/material/Pagination';
import { getAllPizzas } from '../../action/pizzaAction';
import Error from "../../Alerts/Error";
import Loader from "../../Alerts/Loader";
import Filters from "../../components/FilterData/Filters";
import {Helmet} from "react-helmet";
import Pizza from '../../components/FoodMenu/Pizza';

const Home = () => {
    const dispatch = useDispatch();
    const pizzastate = useSelector((state) => state.getAllPizzaReducer);
    const { loading, pizzas, error } = pizzastate;

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch]);

    const filteredPizzas = category ? pizzas.filter(pizza => pizza.category === category) : pizzas;

    return (
        <>
        <Helmet>
        <title>All Menu</title>
      </Helmet>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-5"><Filters onCategoryChange={setCategory} /></div>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Error>Error while fetching pizzas {error}</Error>
                ) : (
                    <div className="py-8">
                        <h3 className="text-2xl font-medium mt-4 text-center"> Food Items Listed in Our Website</h3>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredPizzas.slice((page - 1) * pageSize, page * pageSize).map((pizza) => (
                                <div key={pizza.name} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                                    <Pizza pizza={pizza} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="d-flex justify-content-center mt-3 mb-4">
                    <Pagination
                        count={Math.ceil(filteredPizzas.length / pageSize)}
                        page={page}
                        color="primary"
                        onChange={(event, value) => setPage(value)}
                        className="mt-5"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
