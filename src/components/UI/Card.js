import { Fragment } from "react/cjs/react.production.min";
import classes from './Card.module.css'

const Card = (props)=>{
    
    
    return <Fragment>
        <div className={classes.card}>
            {props.children}
        </div>
    </Fragment>

} 

export default Card;