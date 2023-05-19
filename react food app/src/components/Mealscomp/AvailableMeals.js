import React from 'react';
import Card from '../Card/Card';
import MealItem from './MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

function AvailableMeals (props) {
    // const saveHandler = ((x) => {
    //     const list={
    //         ...x
    //     }
    //     // console.log(list)
    // props.onSave(list)
    // })
    const meallist = DUMMY_MEALS.map((meal) => (
        <MealItem
        name={meal.name}
        description={meal.description}
        price={meal.price}
        id={meal.id}
        key={meal.id}
        // save={saveHandler}
        />
    ))
    // console.log(listss)
    return (
        <Card>
            {/* {DUMMY_MEALS.map((meal) => (
            <p>{meal.name}</p>
            ))} */}
            <ul>{meallist}</ul>
        </Card>
    )
}
export default AvailableMeals;
