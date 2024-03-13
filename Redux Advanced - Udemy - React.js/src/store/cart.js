import { createSlice } from "@reduxjs/toolkit"

const initialCartState = { showCart: false, cartItems: [] }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart
        },
        addItem(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.cartItems.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    quantity: 1,
                    price: action.payload.price
                })
            }
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer