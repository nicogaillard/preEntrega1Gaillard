import { ItemCount } from './ItemCount';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';

export const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext)
    const onAdd = count => addItem(product, count)

    return (
        <div className="descripcionProducto">
            <h1>Detalle del producto: {product.nombre}</h1>
            <h2>Marca: {product.marca}</h2>
            <img src={product.imagen} alt="" width={"60%"} />
            <div>Cantidad en Stock:{product.stock}</div>
            <div>Precio: ${product.precio}</div>
            <div className='agregarAlCarrito'>
                <ItemCount stock={product.stock} onAdd={onAdd} />
            </div>
        </div>)
}