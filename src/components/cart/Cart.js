import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../modal/Modal';
import CartContent from './cartcontent';
import testContext from '../CartProvider';

function Cart(props) {
    //  const ctx = useContext(testContext);
    // let l = [];
    // for (let list of props.lists) {
    //     l.unshift(list)
    // }
    // addList({name: list.name, price: list.price, amount: list.amount});

    const { list } = useContext(testContext);
    
    const ls = list.list.map(x =>
        <CartContent
        name={x.name}
        price={x.price}
        amount={x.amount}
        key={Math.random()}
        />)
        let totalPrice = 0;
        let totalAmount = 0;
        // let array = [];
        for (let l of list.list){
            totalPrice += l.price;
            totalAmount += l.amount;
            // array.push(l.price)
    }
    // props.onSaveCartno(totalAmount);

// calcTotalPrice(totalAmount)


    //     <div>
    //     <span>{x.name}</span>
    //     <span>{x.price}</span>
    //     <span>{x.amount}</span></div>
    // )
    return (
        <Modal onClose={props.onClose}>
            <div>
                {/* <h2>{ctx.name}</h2>
                <h3>{ctx.price}</h3> */}
                {ls}
            </div>

            <div className={classes.total}>
                <div>
                    <span>Total Price: </span>
                    <span>${totalPrice.toFixed(2)}</span> 
                </div>
                <div>
                    <button className={classes.close} onClick={props.onClose}>Close</button>
                    <button className={classes.order}>Order</button>
                </div>
            </div>
        </Modal>
    );
}

export default Cart;