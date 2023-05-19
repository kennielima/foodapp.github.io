import { Fragment, useContext, useState } from 'react';
import classes from './Cartbutton.module.css';
import CartIcon from './CartIcon';
import Cart from './Cart';
import testContext from '../CartProvider';

function Cartbutton(props) {

    const { list } = useContext(testContext);

    const [isClicked, setIsClicked] = useState(false);
    // const [ totalAmount, setTotalAmount ] = useState(0);

    const clickHandler = () => {
        setIsClicked(true);
    }
    const hideHandler = () => {
        setIsClicked(false);
    }
    // const total = (totalfromcart => {
    //     setTotalAmount(totalfromcart);
    // })
    // const calcTotalPrice = (x => {
    //     dispatch({type: 'addlist', list: {totalAmount: totalAmount}})
    //     // console.log(totalAmount);
    // })    
    // calcTotalPrice();
// console.log(list)
    return (
        <Fragment>
            {isClicked && <Cart onClose={hideHandler} 
            // onSaveCartno={total}
            />}
            <button className={classes.cart} onClick={clickHandler}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your cart</span>
                <span className={classes.cartno}>{list.totalAmount}</span>
            </button>
        </Fragment>
    );
}
export default Cartbutton;