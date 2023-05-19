import React, { useRef } from 'react';
import classes from './MealCart.module.css';
// import testContext from '../CartProvider';
// import MealItem from './MealItem';

function MealCart(props) {

    const inputref = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        // const details = {
        // name: props.list.name,
        // price: props.list.price,
        // amount: inputref.current.value
        // }
        const amount= inputref.current.value;

        props.onSave(amount);
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <span className={classes.amount}>Amount</span>
                <input className={classes.cartnum}
                    defaultValue="1"
                    type="number"
                    min="1"
                    max="10"
                    ref={inputref}
                    >
                </input>
            </div>
            <button className={classes.button} 
            type='submit' 
            onClick={submitHandler}> + Add </button>
        </form>
    );
}

export default MealCart;