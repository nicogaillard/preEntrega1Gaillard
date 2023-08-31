import { CartWidget } from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="/">PC World</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/categorys/procesador">Procesadores</Nav.Link>
                        <Nav.Link href="/categorys/memoria-ram">Memorias Ram</Nav.Link>
                        <Nav.Link href="/categorys/placa-madre">Placas Madre</Nav.Link>
                        <Nav.Link href="/categorys/fuente">Fuentes de Alimentacion</Nav.Link>
                        <Nav.Link href="/categorys/placa-video">Tarjetas Gráficas</Nav.Link>
                        <Nav.Link href="/categorys/almacenamiento">Almacenamiento</Nav.Link>
                    </Nav>
            <CartWidget />
                </Container>
            </Navbar>
        </header>
    )
}
