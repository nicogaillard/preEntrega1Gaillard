import { CartWidget } from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home">GuilleNails</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="">Uñas</Nav.Link>
                        <Nav.Link href="">Diseños</Nav.Link>
                        <Nav.Link href="">Contacto</Nav.Link>
                    </Nav>
            <CartWidget />
                </Container>
            </Navbar>
        </header>
    )
}
