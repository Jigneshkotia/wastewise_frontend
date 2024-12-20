import {createSlice} from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : 'cart',
    initialState : {
        value : []
    },
    reducers: {
        addToCart : (state , action ) => {
            state.value.push(action.payload);
        },

        removeFromCart : (state, action) => {
            state.value = state.value.filter(item => 
                item.image !== action.payload.image &&
                item.name !== action.payload.name &&
                item.price !== action.payload.price
                );
        }
    }
})

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;