import { Fragment } from 'react';
import Cartbutton from '../cart/Cartbutton';
import classes from './Header.module.css';
import meals from '../../meals.jpg';

function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 className={classes.head}>ReactMeals</h1>
                <Cartbutton />
            </header>
            <div className={classes.mealImg}>
                <img src={meals} alt='food'/>
            </div>
        </Fragment>
    );
}

export default Header;