import { useOutletContext } from "react-router-dom";

const RecipeIngredients = () => {
  const recipe = useOutletContext();

  return (
    <div>
      <p> {recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeIngredients;
