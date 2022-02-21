import { useContext } from "react";
import { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from './HeaderCardButton.module.css'

const HeaderCardButton = (props) =>{

    const cartCtx = useContext(CartContext);

    const numberOfcartItems = cartCtx.items.reduce((currentNo,item)=>{
        return currentNo + item.amount;
    },0)

    return <Fragment>
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}> <CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfcartItems}</span>
        </button>

    </Fragment>
}

export default HeaderCardButton;