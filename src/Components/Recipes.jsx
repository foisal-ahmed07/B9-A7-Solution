/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";

const Recipes = ({addToCooking}) => {
  const [recipes, SetRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => SetRecipes(data));
  });


  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
        {recipes.map((recipe) => (
          <div className="card bg-base-100 border p-4 ">
            <figure>
              <img
                className="w-full rounded-xl"
                src={recipe.recipe_image}
                alt="recipe"
              />
            </figure>
            <div className="">
              <h2 className="card-title mt-4 text-3xl font bold">
                {recipe.recipe_name}
              </h2>
              <p className="my-4 text-gray-500">{recipe.short_description}</p>

              <hr />

              <div className="py-5">
                <h2 className="text-xl font-bold pb-4">
                  Ingredients: {recipe.ingredients.length}
                </h2>

                {recipe.ingredients.map((ingred) => (
                  <ul>
                    <li className="text-gray-500 list-disc ml-12">{ingred}</li>
                  </ul>
                ))}
              </div>
              <hr />

              <div className="my-5 flex gap-4 items-center">
                <p className="flex items-center gap-3">
                  <i className="fa-regular fa-clock text-xl"></i>{" "}
                  {recipe.preparing_time} minuts
                </p>
                <p className="flex items-center gap-3">
                  <i className="fa-solid fa-fire text-xl"></i> {recipe.calories}{" "}
                  calories
                </p>
              </div>

              <div className="card-actions ">
                <button
                onClick={() => addToCooking(recipe)}
                 className="btn bg-green-400 px-4 py-2 rounded-full text-lg">
                  Want To Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
