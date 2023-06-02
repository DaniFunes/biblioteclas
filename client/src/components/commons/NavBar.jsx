import { Link } from "react-router-dom";
// import { useAuth } from '../context/auth'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ todoCount }) {
  // const [user] = useAuth()

  return (
    <Navbar bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">BIBLIOTETAS</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/bibliotecas">
            Bibliotecas
          </Nav.Link>
        </Nav>

        <Nav className="justify-content-end">
          <Nav.Link as={Link} to="/test">
            Test
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
