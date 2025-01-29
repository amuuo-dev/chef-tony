import { useState, useRef, useEffect } from "react";
import TonyRecipe from "./TonyRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../../ai";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  async function getRecipe() {
    setLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(false);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient").trim();
    if (!newIngredient) {
      alert("Ingredient cannot be empty!");
      return;
    }
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main className="pt-[30px] px-[30px] pb-[10px]">
      <form
        action={addIngredient}
        className="flex justify-center h-[38px] gap-[12px]"
      >
        <input
          className="rounded-md border border-gray-300 p-[9px] px-[13px] shadow-sm flex-grow min-w-[150px] max-w-[400px] outline-none"
          type="text"
          placeholder="e.g. wheat flour"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="rounded-md border-none bg-[#141413] text-[#FAFAF8] w-[150px] text-sm font-medium before:content-['+'] before:mr-[5px]">
          Add ingredient
        </button>
      </form>
      {ingredients.length < 4 && (
        <p className="text-xs md:text-base mt-5 ml-0 md:ml-8">
          Add atleast four ingredients inorder to generate{" "}
          <span className="text-orange-600 font-semibold">Recipe</span>
        </p>
      )}
      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
          loading={loading}
        />
      )}
      {/* recipe from Ai */}
      {recipe ? <TonyRecipe recipe={recipe} /> : null}
    </main>
  );
};

export default Main;
