import {useRef, useState} from 'react';
import Input from "../../UI/Input";

import classes from './MealItemForm.module.css'

const MealItemForm = (props) =>{
    const [amountIsValid, setAmountIsValid] = useState(true)
    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredAmount = enteredAmountRef.current.value;
        const enteredAmountValue = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountValue <1 || enteredAmountValue >5){
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountValue);    
    }
    const enteredAmountRef = useRef()
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={enteredAmountRef}
        label='amount' 
        input={{
            id: 'amount',
            type:'number',
            min: '1',
            max: '5', 
            step:'1',
            defaultValue:'1'
        }} />
    <button>ADD +</button>
    {!amountIsValid && <p>Please enter a valid amount(Between 1-5 )</p>}
    </form>

}

export default MealItemForm;
