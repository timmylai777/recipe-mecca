import React from "react";

function FormComponent(props) {
    return (
        <main className="recipeForm">
            <h2>Add New Recipe</h2>
            <form onSubmit={props.submit}>
                <input
                    id="newDishName"
                    placeholder="Dish Name"/>
                    <br></br>
                <input
                    id="newImage"
                    placeholder="Image Link"/>
                    <br></br>
                <input
                    id="newIngredients"
                    placeholder="Ingredients (separate with comma)" />
                <input
                    id="newInstructions"
                    placeholder="Instructions (separate with period)" />
                    <br></br>
                <button>Finish!</button>
            </form>
        </main>
    )
}
export default FormComponent;

