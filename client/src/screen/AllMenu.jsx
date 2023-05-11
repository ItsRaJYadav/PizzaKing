

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container, Row, Col } from "react-bootstrap";
import Pizza from '../components/Pizza';
import { getAllPizzas } from '../action/pizzaAction';
import Error from "../Alerts/Error";
import Loader from "../Alerts/Loader";
import Filters from "../components/Filters";
import {Helmet} from "react-helmet";

const Home = () => {
    const dispatch = useDispatch();
    const pizzastate = useSelector((state) => state.getAllPizzaReducer);
    const { loading, pizzas, error } = pizzastate;

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
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
            <Container>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Error>Error while fetching pizzas {error}</Error>
                ) : (
                    <Row>
                        <div className="mt-5"><Filters onCategoryChange={setCategory} /></div>
                        <h3 className="text-2xl font-medium mt-4 text-center">Pizza Menu</h3>
                        {filteredPizzas.slice((page - 1) * pageSize, page * pageSize).map((pizza) => (
                            <Col md={4} key={pizza.name}>
                                <Pizza pizza={pizza} />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
            <div className="d-flex justify-content-center mt-3 mb-4">
                <Stack spacing={2}>
                    <Pagination
                        count={Math.ceil(filteredPizzas.length / pageSize)}
                        page={page}
                        color="primary"
                        onChange={(event, value) => setPage(value)}
                    />
                </Stack>
            </div>
        </>
    );
};

export default Home;

