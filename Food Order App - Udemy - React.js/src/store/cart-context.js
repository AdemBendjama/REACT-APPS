import React, { createContext, useState } from "react";

const CartContext = createContext({
    cartItems: [],
    itemQuantity: 0,
    isBumped: null,
    cartIsVisible: null,
    onToggle: () => { },
    onAdd: () => { },
    onRemove: () => { }
})

export default CartContext


export const CartContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])
    const [cartIsVisible, setCartIsVisible] = useState(false)
    const [isBumped, setIsBumped] = useState(null)
    const [itemQuantity, setItemQuantity] = useState(0)

    const handleCartItemAdd = (id, name, price, amount) => {
        setItemQuantity((prevState) => {
            return (prevState + amount)
        })
        handleBump()

        setCartItems((prevState) => {

            const itemIndex = prevState.findIndex((item) => item.id === id)

            if (itemIndex !== -1) {
                const itemList = [...prevState]
                itemList[itemIndex].amount += amount
                return itemList
            }

            return (
                [...prevState,
                {
                    id: id,
                    name: name,
                    price: price,
                    amount: amount,
                },
                ]
            )
        })
    }

    const handleCartItemRemove = (id) => {
        setItemQuantity((prevState) => {
            return (prevState - 1)
        })
        handleBump()

        setCartItems((prevState) => {
            const itemIndex = prevState.findIndex(item => item.id === id)

            if (itemIndex !== -1) {
                const itemList = [...prevState]
                if (itemList[itemIndex].amount === 1) {
                    itemList.splice(itemIndex, 1)
                } else {
                    itemList[itemIndex].amount -= 1
                }
                return itemList
            }
        })
    }



    const handleCartVisibility = () => {
        setCartIsVisible(!cartIsVisible)
    }


    const handleBump = () => {
        setIsBumped(true)
        setTimeout(() => {
            setIsBumped(false)
        }, 300);
    }


    return (
        <CartContext.Provider value={{
            cartItems,
            itemQuantity,
            isBumped,
            cartIsVisible,
            onToggle: handleCartVisibility,
            onAdd: handleCartItemAdd,
            onRemove: handleCartItemRemove
        }}>
            {children}
        </CartContext.Provider>
    )
}