import React from "react";
import dishes from "../sampleRecipeData";
import RecipePost from "./RecipePost";

class AllRecipes extends React.Component {
    constructor() {
        super();
        if (window.localStorage) {
            if (!window.localStorage.recipeStorage) {
            window.localStorage.setItem("recipeStorage", JSON.stringify(dishes));
            }
        }
        this.state = {
            allRecipes: JSON.parse(window.localStorage.getItem("recipeStorage"))
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(itemName) {
        let allRecipesCopy = this.state.allRecipes;
        for (let i = 0; i < allRecipesCopy.length; i += 1) {
            if (allRecipesCopy[i].name == itemName) {
                allRecipesCopy.splice(i, 1);
            }
        }
        this.setState({
            allRecipes: allRecipesCopy

        })
        window.localStorage.setItem("recipeStorage", JSON.stringify(this.state.allRecipes));
        
    }
    /*
    () => {
                for (let i = 0; i < allRecipes.length; i += 1) {
                    if (allRecipes[i].name == item.name) {
                        allRecipes.splice(i, 1);
                    }
                }
                window.localStorage.setItem("recipeStorage", JSON.stringify(allRecipes));

            }*/

    
    render() {
        let allRecipes = JSON.parse(window.localStorage.getItem("recipeStorage"));
        const allDishes = allRecipes.map(item => 
            <RecipePost key={item.id} dish={item} delete={() => this.handleDelete(item.name)}
            />);
        return (
            <div>
                {allDishes}
            </div>

        )
    }

}

export default AllRecipes;