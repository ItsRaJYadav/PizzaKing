import { Navbar, Nav, Container, NavDropdown, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../action/userAction";
import { FaCartPlus } from 'react-icons/fa';




function NavBar() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <>


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to='/' style={{ color: "#ff6347", textDecoration: '1px 1px #000' }}>PIZZA <span className="text-2xl font-bold text-#ff6347 mb-4">KING</span>
          </Navbar.Brand>


          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link as={NavLink} to='/pizzas' className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3">All Foods</Nav.Link>
              <Nav.Link as={NavLink} to='/contact' className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3">Contact Us</Nav.Link>



              <Dropdown >
                <Dropdown.Toggle id="dropdown-basic" className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3">
                  Company
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item >
                    <Nav.Link as={NavLink} to='/services' className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3">Our Services</Nav.Link>
                  </Dropdown.Item>
                  <Dropdown.Item >
                    <Nav.Link as={NavLink} to='/why_choose_us' className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3">Why Choose Us</Nav.Link>
                  </Dropdown.Item>
                  <Dropdown.Item >
                    <Nav.Link as={NavLink} to='/pizzas' className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3">About Us</Nav.Link>
                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
              {currentUser && currentUser.isAdmin && <Nav.Link as={NavLink} to='/admin' className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3">Admin Pannel</Nav.Link>}

            </Nav>

            <Nav className="ms-auto">
              {currentUser ? (
                <LinkContainer to="/">
                  <NavDropdown title={'Welcome, ' + currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  {" "}
                  <LinkContainer to="/login">
                    <Nav.Link className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3">Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3">Register</Nav.Link>
                  </LinkContainer>{"   "}
                </>
              )}

              <LinkContainer to="/cart">

                <Nav.Link className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3">
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <FaCartPlus />
                    <span style={{ marginLeft: '0.5rem', color: cartState.cartItems.length > 0 ? '#ff6347' : 'dark' }}>
                      [{cartState.cartItems.length}]
                    </span>
                  </span>
                </Nav.Link>



              </LinkContainer>



            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
      

    </>
  );
}

export default NavBar;