import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { ItemList } from "./ItemList";
import { getFirestore, getDocs, collection } from "firebase/firestore"

export const ItemListContainer = ({titulo}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { id } = useParams()


    useEffect(() =>{
    const db = getFirestore()

    const refCollection = collection(db, "productos")

    getDocs(refCollection).then((snapshot)=> {
        if (snapshot.size === 0) console.log(`no hay productos disponibles`)
        else setProducts(snapshot.docs.map((doc) => {
    return {id: doc.id, ...doc.data()}}))
    })
    .finally(() => setLoading(false))
}, [id])

    if (loading) return <div>Loading...</div>

    return <Container>
        <h1>{titulo}</h1>
        <div className="cardProductos">
            <ItemList products={products} />
        </div>
    </Container>
}