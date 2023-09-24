import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { ItemList } from "./ItemList";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"

export const ItemListContainer = ({ titulo }) => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()


    useEffect(() => {

        const db = getFirestore()

        const refCollection = id ? query(collection(db, "productos"), where("categoria", "==", id)) : collection(db, "productos")

        getDocs(refCollection).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            }))
        })
            .finally(() => setLoading(false))
    }, [id])


    if (loading) return <div className="cargando">
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>

    return <Container>
        <h1>{titulo}</h1>
        <div className="cardProductos">
            <ItemList products={products} />
        </div>
    </Container>
}