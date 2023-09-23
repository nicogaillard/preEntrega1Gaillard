import { useState, useEffect } from "react";
import { CartWidget } from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore"

export const NavBar = () => {

    const [categorias, setCategorias] = useState([])

useEffect(()=> {

    const db = getFirestore()
    
    const refCollection = collection(db, "productos")
    
    console.log(refCollection)
    
    getDocs(refCollection).then((snapshot)=> {
        setCategorias(snapshot.docs.map((doc) => {
            const dataProductos = {id: doc.id, ...doc.data()}
            return dataProductos.categoria
        }))
    })
}, [])

console.log(categorias)

const categoriaUnica = new Set(categorias)

    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" >
                <Container>
                    <NavLink className={`navbar-brand`} to="/" >PC World</NavLink>
                    <Nav className="me-auto">
                        {[...categoriaUnica].map(categoria => (
                            <NavLink key={categoria} to={`/categorys/${categoria}`} className="nav-link">{categoria}</NavLink>
                        ))}
                    </Nav>
            <CartWidget />
                </Container>
            </Navbar>
        </header>
    )
}
