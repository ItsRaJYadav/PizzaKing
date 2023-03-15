import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Container, Row, Col, Carousel } from "react-bootstrap";
// import AllPizza from '../PizzaData';
import Pizza from '../components/Pizza';
import { getAllPizzas } from '../action/pizzaAction'
// import { v4 as uuidv4 } from 'uuid';
import Footer from '../components/Footer';
import pizaaimage from '../assets/pizza one.jpg'
import pizaa from '../assets/pizza.jpg'
import pizaa3 from '../assets/pizza one.jpg'
import Error from "../Alerts/Error";
import Loader from "../Alerts/Loader";
import Filters from "../components/Filters";





const Home = () => {

  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  // console.log(pizzas);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <Carousel fade >
        <Carousel.Item style={{ height: '35vh' }} interval={3000}>
          <img
            className="d-block w-100"
            src={pizaaimage}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption d-none d-md-block">
            <h3>Deal Of The day</h3>
            <p style={{ color: 'dark' }}> Buy One Get one free on all types of pizza </p>
            <div className="btn-group" role="group">
              <NavLink as={NavLink} to='/login'>
                <button className="btn btn-primary">
                Login To Order
                </button>
              </NavLink>
              <button
                type="button"
                className="btn btn-success"
                style={{ marginLeft: 50 }}
              >
               Find Best Offers for you
              </button>
            </div>


          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '35vh' }} interval={2000}>
          <img
            className="d-block w-100"
            src={pizaa}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Deal Of The day</h3>
            <p style={{ color: 'dark' }}> Buy One Get one free on all types of pizza </p>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary">
                Our Vision
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginLeft: 50 }}
              >
                Latest Offers
              </button>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '35vh' }} interval={3000}>
          <img
            className="d-block w-100"
            src={pizaa3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Deal Of The day</h3>
            <p style={{ color: 'white' }}> Buy One Get one free on all types of pizza </p>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary">
                Buy One Get one free Offers
              </button>
              <button
                type="button"
                className="btn btn-danger"
                style={{ marginLeft: 50 }}
              >
                Meet Our Team
              </button>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error>Error while fetching pizzas {error}</Error>
        ) : (
          <Row>
            <Filters />
            <h3 className="text-2xl font-medium mt-4  text-center">Our Menu </h3> 
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
