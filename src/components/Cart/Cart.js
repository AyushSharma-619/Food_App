import { useContext } from 'react';
import classes from './Cart.module.css'
import CartItem from './CartItem';
import Modal from "../UI/Modal";
import CartContext from '../../store/cart-context';


const Cart = (props)=>{
    
    const cartCtx = useContext(CartContext)
    const totalBill = `$ ${cartCtx.totalBill.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItems(id);
      };


    const cartItemAddhandler = (item)=>{
        cartCtx.getItems({...item,amount:1})
    }

    

    const cartItems = (<ul>
    {cartCtx.items.map((item)=>
        (<CartItem 
        key={item.id} 
        name={item.name} 
        price={item.price} 
        amount={item.amount} 
        onRemove={cartItemRemoveHandler.bind(null,item.id)} 
        onAdd={cartItemAddhandler.bind(null,item)} />)
    )}
    </ul>
    )

    return (
        <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalBill}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            { hasItems && <button className={classes.button}>Order</button>}
        </div>
        </Modal>
    ) 
}

export default Cart;