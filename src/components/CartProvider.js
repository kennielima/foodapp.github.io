import React, { useReducer } from 'react';
const testContext = React.createContext();

export function CartProvider(props) {

    const reducer = (state, action) => {
        if (action.type === "addlist") {
            let totalAmount = 0;

        const existingItem = state.list.filter(e => e.name === action.list.name);
            if (existingItem.length > 0){
                existingItem[0].price += action.list.price;
                existingItem[0].amount += action.list.amount;
        } else {
            state.list.push({
                name: action.list.name,
                price: +action.list.price,
                amount: +action.list.amount,      
            })
        }
                for (let eachstate of state.list) {
                    totalAmount += eachstate.amount;
                }
                console.log(totalAmount);

                return ({list: state.list, totalAmount})


            // for (let eachstate of state) {
            //     if (eachstate.name === action.list.name) {
            //          eachstate.price += action.list.price;
            //          eachstate.amount += action.list.amount;
            //         //return ([...state]);
            //     }
            //     totalAmount += eachstate.amount;
            // }

            // return ([...state, {
            //     name: action.list.name,
            //     price: +action.list.price,
            //     amount: +action.list.amount,
                
            // }]);
        }
    }
    const [list, dispatch] = useReducer(reducer, {list:[], totalAmount:0});
    // console.log(list);

    return (
        <testContext.Provider value={{ list, dispatch }}>
            {props.children}
        </testContext.Provider>
    );
}

export default testContext;

    // const saveList = (name, price,amount) => {
    //     setList([...list, {name, price, amount}]);
    // }

        // const existingItem = state.filter(e => e.name === action.list.name);
            // if (existingItem.length > 0){
            //     existingItem[0].price += action.list.price;
            //     existingItem[0].amount += action.list.amount;
            //     return ([...state]);
        // }