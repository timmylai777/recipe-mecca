import React from "react";
import AllRecipes from "./components/AllRecipes";
import Form from "./components/NewRecipeFormContainer";
import Header from "./components/Header";

function App() {
  return(
    <div>
      <Header />
      <AllRecipes />
      <Form />
    </div>
  )
}
export default App;