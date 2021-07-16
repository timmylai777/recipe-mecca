import React from "react";
import FormComponent from "./FormComponent";

class Form extends React.Component {
    constructor() {
        super();
    }
    handleAddRecipe() {
        let newDishName = document.getElementById("newDishName").value;
        let newIngredients = document.getElementById("newIngredients").value;
        let newInstructions = document.getElementById("newInstructions").value;
        let newImage = document.getElementById("newImage").value;
        let newRecipe = {
            name: newDishName,
            ingredients: newIngredients.split(","),
            instructions: newInstructions.split("."),
            image: newImage
        }
        let allRecipes = JSON.parse(window.localStorage.getItem("recipeStorage"));
        let newRecipeList = [];
        for (let i = 0; i < allRecipes.length; i += 1) {
            newRecipeList.push(allRecipes[i]);
        }
        newRecipeList.push(newRecipe);
        window.localStorage.setItem("recipeStorage", JSON.stringify(newRecipeList));
        
    }

    render() {
            return (
                <FormComponent submit={this.handleAddRecipe} />
            )
        }
}

export default Form;