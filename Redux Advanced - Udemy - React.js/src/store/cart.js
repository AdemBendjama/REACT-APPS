import { createSlice } from "@reduxjs/toolkit"

const initialCartState = { showCart: false, cartItems: [] }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart
        },
        replace(state, action) {
            state.cartItems = action.payload.cartItems
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
        },
        removeItem(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                if (state.cartItems[itemIndex].quantity === 1) {
                    state.cartItems.splice(itemIndex, 1);
                } else {
                    state.cartItems[itemIndex].quantity -= 1;
                }
            }
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer