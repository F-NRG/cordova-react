import React, {Component} from "react";
import classes from "./burgerBuilder.module.css";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICES = {
      salad: 0.5, 
      bacon: 0.8,
      cheese: 0.4,
      meat: 2.5
}
class BurgerBuilder extends Component {
  
  state = {
    ingredients: {
      salad: 0, 
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4 
  }
  addIngredientHandler = (type)  => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1; 
    const updatedIngredients = {
      ...this.state.ingredients   
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  }
  removeIngredientHandler = (type)  => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1; 
    const updatedIngredients = {
      ...this.state.ingredients  
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  }
 render() { 
  return (
    <>
      <Burger ingredients={this.state.ingredients}/>    
      <BuildControls ingredientAdded={this.addIngredientHandler} 
        ingredientRemoved={this.removeIngredientHandler}
        totalPrice={this.state.totalPrice}/>
      <p className={classes.Content}></p>
    </>
  )
}
}
export default BurgerBuilder;
