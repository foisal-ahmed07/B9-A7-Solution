/* eslint-disable react/prop-types */
import React from "react";

const SideBar = ({
  recipeBar,
  handleRemove,
  preparedRecipe,
  calculateTotal,
  totalCalories,
  totalTime,
}) => {
  return (
    <div className="md:w-1/3 border p-4 rounded-xl">
      <h1 className="text-3xl font-bold text-center mb-3">
        {" "}
        Want To Cook: {recipeBar.length}
      </h1>
      <hr />
      {/* want to cook */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="hover">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeBar.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name} </td>
                <td>{recipe.preparing_time} minuts</td>
                <td>{recipe.calories} calories</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id)
                      calculateTotal(recipe.preparing_time, recipe.calories)
                    }}
                    className="bg-green-400 font-bold rounded-full px-3 py-2"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* current table */}

      <h1 className="text-3xl font-bold text-center mb-3 mt-8">
        Currently cooking: {recipeBar.length}
      </h1>
      <hr />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="hover">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name} </td>
                <td>{recipe.preparing_time} minuts</td>
                <td>{recipe.calories} calories</td>
              </tr>
            ))}
            <tr className="hover">
              <td></td>
              <td></td>
              <td className="text-gray-900 font-bold">
                Total Time= {totalTime}
              </td>
              <td className="text-gray-900 font-bold">
                Total Calories= {totalCalories}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideBar;
