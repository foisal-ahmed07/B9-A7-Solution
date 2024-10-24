import "./App.css";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import RecipeContent from "./Components/RecipeContent";
import Recipes from "./Components/Recipes";
import SideBar from "./Components/SideBar";
import { useState } from "react";

function App() {
  const [recipeBar, setRecipeBar] = useState([]);

  const [preparedRecipe, setParedRecipe] = useState([]);

  const [totalTime, setTotalTime] = useState(0);

  const [totalCalories, setTotalCalories] = useState(0);

  const calculateTotal = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };

  const addToCooking = (recipe) => {
    const isExist = recipeBar.find(
      (pRecipe) => pRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeBar([...recipeBar, recipe]);
    } else {
      alert("Already Exist");
    }
  };

  const handleRemove = (id) => {
    const deletedRecipe = recipeBar.find((recipe) => recipe.recipe_id === id);
    // remove form recipe bar
    const updaterBar = recipeBar.filter((recipe) => recipe.recipe_id !== id);
    setRecipeBar(updaterBar);
    setParedRecipe([...preparedRecipe, deletedRecipe]);
  };

  return (
    <>
      {/* header nav */}
      <Nav></Nav>

      {/* banner  */}
      <Banner></Banner>

      {/* recipes */}

      <RecipeContent></RecipeContent>

      {/* recipes card */}
      <section className="flex flex-col md:flex-row gap-6 w-11/12 mx-auto mt-12 pb-12">
        {/* card section */}
        <Recipes addToCooking={addToCooking}></Recipes>

        {/* sidebar section */}
        <SideBar
          calculateTotal={calculateTotal}
          preparedRecipe={preparedRecipe}
          handleRemove={handleRemove}
          recipeBar={recipeBar}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></SideBar>
      </section>
    </>
  );
}

export default App;
