import { Fragment } from "react/cjs/react.production.min";

import classes from './MealsSummary.module.css'

const MealsSummary = (props) =>{

    return <Fragment>
        <section className={classes.summary}>
        <h2 >Awesome Food , Delivered To You At The Click of a Button</h2>
        <p>Select from a wide variety of dishes ...</p>
        <p> Cooked with fresh and hand picked ingredients , specially for you ...</p>
        </section>
    </Fragment>
}

export default MealsSummary;