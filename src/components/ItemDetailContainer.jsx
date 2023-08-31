import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import data from "../data/products.json"
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = ({titulo}) => {
    const [product, setProduct] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const productId = data.find(product => product.id == id)
                resolve(productId)}, 2000)
            
        })

        promise.then((data) => setProduct(data))
    }, [])

    if(!product) return <div>Loading...</div>
    return <Container>
        <ItemDetail product={product}/>
    </Container>
}