import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  getAllPizzaReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  updatePizzaByIdReducer,
} from "./reducer/PizzaReducer";


import { cartReducer } from "./reducer/CartReducer";

import {
  registerUserReducer,
  loginUserReducer,
  getAllUsersReducer,
} from "./reducer/userReducer";


import {
  placeOrderReducer,
  getUserOrdersReducer,
  allUserOrdersReducer,
} from "./reducer/orderReducer";


let cartItems = [];
try {
  cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
} catch (error) {
  console.error("Error parsing cart items from local storage:", error);
}

let currentUser = null;
try {
  currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
} catch (error) {
  console.error("Error parsing current user from local storage:", error);
}

  
const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  updatePizzaByIdReducer: updatePizzaByIdReducer,
  allUserOrdersReducer: allUserOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
});

const initialState = {
  cartReducer: {
    cartItems: cartItems
  },
  loginUserReducer :{
    currentUser: currentUser
  }
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;