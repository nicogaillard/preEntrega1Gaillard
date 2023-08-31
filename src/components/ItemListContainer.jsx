import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import data from "../data/products.json"
import { ItemList } from "./ItemList";




export const ItemListContainer = ({titulo}) => {
    const [products, setProducts] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })

        promise.then(data => {
            if(!id) {
            setProducts(data)
        } else {
            const productsFiltrados = data.filter(product => product.categoria == id)
            setProducts(productsFiltrados)
        }
    })
    }, [])

    return <Container>
        <h1>{titulo}</h1>
        <div className="cardProductos">
            <ItemList products={products} />
        </div>
    </Container>
}