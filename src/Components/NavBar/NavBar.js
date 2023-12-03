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
      
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand to="/"> <Logo/> SUShop </Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/">Inicio</Link>
              <Link to="/ropa">Ropa</Link>
              <Link to="/calzado">Calzado</Link>
              <Link to="/accesorio">Accesorio</Link>
            

            </Nav>
          <Link to="/cart"> <CartWidget/> </Link>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;