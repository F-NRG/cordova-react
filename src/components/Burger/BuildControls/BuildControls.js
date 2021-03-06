import React from 'react';
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
    
    return (
        <div className={classes.BuildControls}>
            <p>{props.totalPrice.toFixed(2)}</p>
            {controls.map(ctrl => {
                return <BuildControl 
                            key={ctrl.label} 
                            label={ctrl.label} 
                            onAddIngredient={() => props.ingredientAdded(ctrl.type)}
                            onRemoveIngredient={() => props.ingredientRemoved(ctrl.type)}></BuildControl>
            })}
        </div>
    );
};

export default buildControls;