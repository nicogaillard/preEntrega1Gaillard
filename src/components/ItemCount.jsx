import { useState } from "react"
import { Button } from "react-bootstrap"


export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1)

    const btnReducirCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1)
        }
    }

    const btnAumentarCount = () => {
        if (stock > count) {
            setCount((prev) => prev + 1)
        }
    }


    return (
        <div className="cantAgregarCarrito">
            <Button variant="danger" onClick={btnReducirCount}>-</Button>
            <span className="count">{count}</span>
            <Button variant="success" onClick={btnAumentarCount}>+</Button>
            <Button className="btn btn-primary btnAgregarCarrito" onClick={() => onAdd(count)}>Agregar al Carrito</Button>
        </div>
    )
}