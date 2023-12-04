import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <>
      
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand to="/"> <Logo/> SUShop </Navbar.Brand>
            <Nav className="container">
              <Link to="/">Inicio</Link>
              <Link to="/categoria/ropa">Ropa</Link>
              <Link to="/categoria/calzado">Calzado</Link>
              <Link to="/categoria/accesorio">Accesorio</Link>

            </Nav>
          <Link to="/cart"> <CartWidget/> </Link>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;