import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false, notification: { status: '', title: '', message: '', active: false } }

const ui = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart
        },
        notify(state, action) {
            state.notification.status = action.payload.status
            state.notification.title = action.payload.title
            state.notification.message = action.payload.message
            state.notification.active = true
        }
    }
})


export const uiActions = ui.actions

export default ui.reducer