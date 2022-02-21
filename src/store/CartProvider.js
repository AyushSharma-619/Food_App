import { useReducer } from 'react';
import CartContext from './cart-context'

const defaultState = {
    items:[],
    totalBill:0
}

const cartReducer = (state,action) =>{
    if(action.type === 'ADD'){
       const existingCartItemIndex = state.items.findIndex((item)=> item.id === action.item.id)
       const existingCartItem = state.items[existingCartItemIndex]
       
       let updatedItems;

       if(existingCartItem){
           const updatedItem={
               ...existingCartItem,
               amount:existingCartItem.amount + action.item.amount
           }
           updatedItems = [...state.items];
           updatedItems[existingCartItemIndex] =updatedItem 
       }else{
           updatedItems = state.items.concat(action.item);
       }

       const updatedTotalBill = state.totalBill + action.item.price * action.item.amount;
       return ({
           items:updatedItems,
           totalBill:updatedTotalBill
       })
    }
    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex((item)=> item.id === action.id)
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalBill = state.totalBill - existingItem.price;
        let updatedItems;
        if(existingItem.amount ===1){
            updatedItems = state.items.filter((item)=> item.id !== action.id)
        }else{
            const updatedItem = {...existingItem,amount:existingItem.amount -1}
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return({
            items: updatedItems,
            totalBill:updatedTotalBill
        })
    }
    return defaultState
}

const CartProvider = (props)=>{
    const [cartState, cartAction]=useReducer(cartReducer,defaultState)
    const addItemToCart = (item)=>{
        cartAction({
            type : 'ADD',
            item:item
        })
    };
    const removeItemFromCart = (id)=>{
        cartAction({
            type: 'REMOVE',
            id:id
        })
    };

    const cartContext = {
        items:cartState.items,
        totalBill:cartState.totalBill,
        getItems:addItemToCart,
        removeItems:removeItemFromCart
    }

    return <CartContext.Provider value={cartContext}>

        {props.children}
    </CartContext.Provider>
}

export default CartProvider;