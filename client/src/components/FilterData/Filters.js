

import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../../action/pizzaAction";
import { motion } from "framer-motion";
const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(filterPizza(searchkey, category));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategoryChange = (event) => {
    setcategory(event.target.value);
  };

  return (
    <>
    
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-gray-50 mt-4 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-medium mb-4">Filter Pizzas</h3>

      <div>
  <Row className="mb-4">
    <Col xs={8} className="mb-2 mb-md-0">
      <Form.Control
        value={searchkey}
        onChange={(e) => setsearchkey(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search for food items"
        className="border-0 bg-gray-50 focus:ring-0 focus:border-primary-400 rounded-md shadow-sm"
      />
    </Col>
    <Col xs={4}>
      <Button
        onClick={handleSearch}
        className="w-100 bg-success-400 text-white px-4 py-2 rounded-md hover:bg-primary-500 focus:ring-0 focus:border-success-500 transition-colors duration-300"
      >
        Search
      </Button>
    </Col>
  </Row>
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

    </motion.div>
    </>
  );
};

export default Filters;
