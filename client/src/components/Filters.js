import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../action/pizzaAction";
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
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-gray-50 mt-4 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-medium mb-4">Filter Pizzas</h3> 
      
      <Form>
        <Row className="mb-2">
          <Col>
            <Form.Control
              value={searchkey}
              onChange={(e) => setsearchkey(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search Pizzas"
              className="border-0 bg-gray-50 focus:ring-0 focus:border-primary-400 rounded-md"
            />
          </Col>
          <Col>
            <select
              className="form-select border-0 bg-gray-50 focus:ring-0 focus:border-primary-400 rounded-md"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="all">All</option>
              <option value="veg">Veg</option>
              <option value="nonveg">Non-Veg</option>
            </select>
          </Col>
          <Col>
            <Button
              onClick={handleSearch}
              className="bg-primary-400 text-white px-4 py-2 rounded-md hover:bg-primary-500 focus:ring-0 focus:border-primary-500 transition-colors duration-300"
            >
              Search
            </Button>
            
          </Col>
        </Row>
      </Form>
    </motion.div>
  );
};

export default Filters;
