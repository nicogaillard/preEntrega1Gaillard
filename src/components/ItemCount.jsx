import { useState } from "react"
import { Button } from "react-bootstrap"

const stock = 3

export const ItemCount = () => {
    const [count, setCount] = useState(1)

    const btnReducirCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1)
        }
    }

    const btnAumentarCount = () => {
        if(stock > count){
            setCount((prev) => prev + 1)
    }
}

const onAdd = () => {
    alert(`Se agregaron ${count} al carrito`)
}

return (
    <div className="cantAgregarCarrito">
        <span onClick={btnReducirCount}>-</span>
        <span>{count}</span>
        <span onClick={btnAumentarCount}>+</span>
        <Button className="btn btn-primary btnAgregarCarrito" onClick={onAdd}>Agregar al Carrito</Button>
    </div>
)
}