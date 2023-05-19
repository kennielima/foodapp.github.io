import React from 'react';
import MealSummary from './MealSummary';
import classes from './Meals.module.css';
import AvailableMeals from './AvailableMeals';

function Meals (props) {
    // const saveHandler = ((x) => {
    //     const list={
    //         ...x
    //     }
    //     props.saved(list)
    //     // console.log(list)
    // })
    return (
        <div className={classes.meals}>
        <MealSummary />
        <AvailableMeals />
        </div>
    );
}
export default Meals;