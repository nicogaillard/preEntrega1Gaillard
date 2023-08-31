import { ItemCount } from './ItemCount';

export const ItemDetail = ({product}) => (<div className="descripcionProducto">
    <h1>Detalle del producto: {product.nombre}</h1>
    <h2>Marca: {product.marca}</h2>
    <img src={product.imagen} alt="" />
    <div>Cantidad en Stock:{product.stock}</div>
    <div>Precio: ${product.precio}</div>
    <div className='agregarAlCarrito'>
    <ItemCount />
    </div>
</div>)