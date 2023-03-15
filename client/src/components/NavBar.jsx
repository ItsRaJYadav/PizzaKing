import { Navbar, Nav, Container,  NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../action/userAction";
import { FaCartPlus } from 'react-icons/fa';


// import user from '../assets/user.svg'
// import './Nav.css'

function NavBar() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <>


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to='/' style={{color:"#ff6347", textDecoration:'1px 1px #000'}}>PIZZA <span className="text-2xl font-bold text-#ff6347 mb-4">KING</span> 
          </Navbar.Brand>
          
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link as={NavLink} to='/offers'>Offers</Nav.Link>
              <Nav.Link as={NavLink} to='/contact'>Contact Us</Nav.Link>
              <Nav.Link as={NavLink} to='/About'>About Us</Nav.Link>



            </Nav>
            {/* <Nav>
              
              // <Nav.Link as={NavLink} to='/register' >Register</Nav.Link>
              <Nav.Link as={NavLink} to='/login' > User Login</Nav.Link>
              <Nav.Link as={NavLink} to='/CartScreen' >
                Cart  {cartState.cartItems.length}
              </Nav.Link>


            </Nav> */}

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
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>{"   "}
                </>
              )}

              <LinkContainer to="/cart">

                <Nav.Link>
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