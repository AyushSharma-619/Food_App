import { Fragment } from 'react';
import classes from './Header.module.css';
import image from '../../assets/meals.jpg'
import HeaderCardButton from './HeaderCardButton';

const Header = (props) =>{

return <Fragment>

    <header className={classes.header}>
        <h1>Food Ordering App</h1>
        <HeaderCardButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src={image} alt="Some problem loading images" />
    </div>
    </Fragment>

}

export default Header;