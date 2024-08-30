import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar expand="lg" className="nav-main fixed-top">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <FaBars className="text-white" /> 
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="m-auto my-2 my-lg-0">
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">MENU</Nav.Link>
            <Nav.Link href="#action3">ABOUT US</Nav.Link>
            <Nav.Link href="#action4">FACILITY</Nav.Link>
          </Nav>
          <Form className="d-flex gap-4">
            <div>
              <FaSearch className="searchbaricon" />
            </div>
            <div className="icons">
              <img
                src="https://cdn-icons-png.flaticon.com/512/891/891407.png"
                alt=""
              />
            </div>
            <Button className="btn btn1">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
