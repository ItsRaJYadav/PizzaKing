import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container, Row, Col } from "react-bootstrap";
import Pizza from '../components/Burger';
import { getAllPizzas } from '../action/pizzaAction';
import Error from "../Alerts/Error";
import Loader from "../Alerts/Loader";
import Filters from "../components/Filters";

const Home = () => {
    const dispatch = useDispatch();
    const pizzastate = useSelector((state) => state.getAllPizzaReducer);
    const { loading, pizzas, error } = pizzastate;

    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(9);

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch]);

    return (
        <>
            <Container>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Error>Error while fetching pizzas {error}</Error>
                ) : (
                    <Row>
                        <div className="mt-5"><Filters /></div>
                        <h3 className="text-2xl font-medium mt-4 text-center">Pizza Menu</h3>
                        {pizzas.slice((page - 1) * pageSize, page * pageSize).map((pizza) => (
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
                        count={Math.ceil(pizzas.length / pageSize)}
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
