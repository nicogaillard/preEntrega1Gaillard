import { useState, useEffect } from "react";
import { CartWidget } from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore"

export const NavBar = () => {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {

        const db = getFirestore()

        const fetchCategorias = async () => {
            try {
                const productosRef = collection(db, "productos");
                const snapshot = await getDocs(productosRef);
                const categoriaUnica = new Set();

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    categoriaUnica.add(data.categoria);
                });

                const categoriaArr = Array.from(categoriaUnica);
                setCategorias(categoriaArr);
            } catch (error) {
                console.error("Error al obtener categorías desde Firebase:", error);
            }
        };
        fetchCategorias();
    }, [])

    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" >
                <Container>
                    <NavLink className={`navbar-brand`} to="/" >PC World</NavLink>
                    <Nav className="me-auto">
                        {categorias.map((categoria) => (
                            <Link key={categoria} to={`/categorys/${categoria}`} className="nav-link">{categoria}</Link>
                        ))}
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </header>
    )
}
