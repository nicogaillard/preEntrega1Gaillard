import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { ItemDetail } from "./ItemDetail";
import { getDoc, doc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const refDoc = doc(db, "productos", id)

        getDoc(refDoc).then((snapshot) => {
            setProduct({id: snapshot.id, ...snapshot.data()})
        })
        .finally(() => setLoading(false))
    })

    if (loading) return <div>Loading...</div>
    
    return <Container>
        <ItemDetail product={product} />
    </Container>
}