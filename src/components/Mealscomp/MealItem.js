import Fragment, { useState,useContext } from 'react';
import MealCart from './MealCart';
import classes from './MealItem.module.css';
import testContext from '../CartProvider';

function MealItem(props) {
    const { dispatch } = useContext(testContext);
    // const [lists, setList] = useState('');
    const savedList = (item) => {
        const list = {
            name: props.name,
            price: props.price,
            amount: item
        }
        // saveList(list.name, list.price, list.amount);
        dispatch({type: 'addlist', list: {
            name: list.name, 
            price: +list.price, 
            amount: +list.amount
        }})
    };
        // setList((prev) => {
        //     // const n=  [prev];
        //     // n.unshift(item)
        //     // console.log(prev);
        //     const cartlist = [(item), ...prev];
        //     // console.log(cartlist)
        //     return (cartlist);
        // })
        // for (let l of listss) {
        //     const carts = {
        //         names: l.name,
        //         price: l.price,
        //         amount: l.amount
        //     }
        //     console.log(carts);
        // }

        // props.save(list)
        // console.log(list)


// const ctx = useContext(testContext);
    return (
        <li className={classes.meal}>
            <div className={classes.blocklist}>
                <div>
                    <h2>{props.name}</h2>
                    <p className={classes.desc}>{props.description}</p>
                    <p className={classes.price}>{`$${props.price}`}</p>
                </div>
                <div className={classes.mealcart}>
                    <MealCart
                        onSave={savedList}
                        // list={list}
                    />
                </div>
            </div>
        </li>
    )
}
export default MealItem;
