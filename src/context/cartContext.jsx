import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const addItem = (product, quantity) => setProducts(prev => [...prev, {...product, quantity}])

    const removeItem = (id) => {
        const productsFiltered = products.filter(product => product.id !== id )
        setProducts(productsFiltered)
    }

    const clear = () => {
        setProducts([])
    }

    const totalWidget = products.reduce((acc, val) => acc + val.quantity, 0)

    return(
        <CartContext.Provider value={{addItem, removeItem, clear, totalWidget}}>
            {children}
        </CartContext.Provider>
    )
}