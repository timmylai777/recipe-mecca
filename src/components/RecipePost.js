import React from "react";


function RecipePost(props) {
    
    return (
        <div className="recipePost">
            <h2>{props.dish.name}</h2>
            <img src={props.dish.image} alt="Image of Dish"></img><br></br>

            <div className="ingredients">
                <h3>Ingredients</h3>
                {props.dish.ingredients.map(
                    ingredient => <li>{ingredient}</li>
                )}<br></br>
            </div>
            
            <div className="ingredients">
                <h3>Instructions</h3>
                <ol>
                {props.dish.instructions.map(
                    instruction => <li>{instruction}</li>
                )}</ol>
            </div>
            <br></br>
            <button onClick={props.delete}>Delete</button>


        </div>
    )
}
export default RecipePost;