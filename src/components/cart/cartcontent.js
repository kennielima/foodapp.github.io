import React from 'react';
import classes from './cartcontent.module.css';
// import Card from '../Card/Card';
function CartContent(props) {
    return (
        // <Card>
        <div className={classes.main}>
            <h2 className={classes.name}>{props.name}</h2>
            <p className={classes.price}>{props.price}</p>
            <span className={classes.amount}>{props.amount}</span>
            <div className={classes.buts}>
                <button>-</button>
                <button>+</button>
            </div>
        </div>
        // </Card>
    )
}

export default CartContent;