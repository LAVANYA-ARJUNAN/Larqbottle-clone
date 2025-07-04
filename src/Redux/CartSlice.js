import {createSlice} from '@reduxjs/toolkit'
const storedItem = localStorage.getItem("cartItem");
const initialState = {cartItem:storedItem ? JSON.parse(storedItem) : [] };
const CartSlice=createSlice({
    name:"mycart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newProduct=action.payload;
            const existProduct=state.cartItem.find((items)=>items.id===newProduct.id);
            if(existProduct){
                existProduct.quantity+=newProduct.quantity;
            }
            else{
                state.cartItem.push({
                    id:newProduct.id,
                    img:newProduct.img,
                    title:newProduct.title,
                    inform:newProduct.inform,
                    inform1:newProduct.inform1,
                    price:newProduct.price,
                    quantity:1
                })
            }
            localStorage.setItem("cartItem",JSON.stringify(state.cartItem))
        },
        deleteFromCart:(state,action)=>{
            state.cartItem = state.cartItem.filter(
                (items)=>items.id!==action.payload.id
            );
            localStorage.setItem("cartItem",JSON.stringify(state.cartItem))
        },
        updateQuantity:(state,action)=>{
        const {id,quantity}=action.payload;
        const update=state.cartItem.find((items)=>items.id===id)
        if(update){
            update.quantity=quantity;
            localStorage.setItem("cartItem",JSON.stringify(state.cartItem))
        }
        }
    }
})
export default CartSlice.reducer;
export const {addToCart,deleteFromCart,updateQuantity} = CartSlice.actions;