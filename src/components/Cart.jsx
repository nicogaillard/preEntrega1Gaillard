import { Container } from "react-bootstrap"
import { useContext } from "react"
import { useState } from "react";
import { CartContext } from "../context/cartContext"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { getFirestore, collection, addDoc } from "firebase/firestore"



export const Cart = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const { products, removeItem, clear } = useContext(CartContext)

    const sendOrder = () => {
        if ((formValues.phone != "") && (formValues.email != "") && (formValues.name != "")) {
            if (products.length > 0) {
                const order = {
                    comprador: formValues,
                    products,
                    total: precioTotal(),
                }

                const db = getFirestore()
                const orderCollection = collection(db, "orders")

                addDoc(orderCollection, order).then(({ id }) => {
                    if (id) {
                        setFormValues({
                            name: "",
                            phone: "",
                            email: "",
                        })
                        clear()
                        alert("Su compra" + id + "fue realizada con éxito")
                    }
                })
            } else alert("No hay productos en el carrito")
        } else alert("ingrese los datos en los campos requeridos")
    }

    const handleChange = event => {
        setFormValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    const precioTotal = () => products.reduce((acc, product) => acc + (product.precio * product.quantity), 0)

    const productsAgregados = products.map((product) => (

        <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.imagen} />
            <Card.Body>
                <Card.Title>{product.marca} {product.nombre}</Card.Title>
                <Card.Text>
                    Cantidad en carrito: {product.quantity}
                </Card.Text>
                <Card.Text>
                    <strong>Subtotal: ${product.precio * product.quantity}</strong>
                </Card.Text>
                <Button variant="danger" onClick={() => removeItem(product.id)}>Eliminar</Button>
            </Card.Body>
        </Card>
    ))
    return (
        <Container>
            <h1>Productos en Carrito</h1>
            <div className="cardProductos">
                {productsAgregados}
            </div>
            <h2>El total es ${precioTotal()}</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control onChange={handleChange} value={formValues.email} name="email" type="email" placeholder="Ingresa tu correo electrónico" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFile">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={handleChange} value={formValues.name} name="name" type="name" placeholder="Ingresa tu nombre completo" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFile">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control onChange={handleChange} value={formValues.phone} name="phone" type="phone" placeholder="Ingresa tu número de teléfono" required />
                </Form.Group>
                <Button variant="success" onClick={sendOrder}>Finalizar Compra</Button>
            </Form>

        </Container>
    )
}