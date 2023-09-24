import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const addItem = (product, quantity) => {
        const productExists = products.some(el => el.id === product.id)

        if (!productExists) setProducts(prev => [...prev, { ...product, quantity }])
        else {
            const actualizarProducto = products.map(el => {
                if (el.id === product.id)
                    return {
                        ...el, quantity: el.quantity + quantity
                    }
                else return el
            })
            setProducts(actualizarProducto)
        }
    }

    const removeItem = (id) => {
        const productsFiltered = products.filter(product => product.id !== id)
        setProducts(productsFiltered)
    }

    const clear = () => {
        setProducts([])
    }

    const totalWidget = products.reduce((acc, val) => acc + val.quantity, 0)

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, products, totalWidget }}>
            {children}
        </CartContext.Provider>
    )
}