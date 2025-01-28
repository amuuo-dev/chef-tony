/* eslint-disable react/prop-types */
const IngredientsList = (props) => {
  const ingredientsListItems = props.ingredients.map((ingred, index) => (
    <li key={index} className="text-[#475467] leading-[28px]">
      {ingred}
    </li>
  ));
  return (
    <section>
      <h2 className="mt-6 text-2xl font-semibold">Ingredients on hand:</h2>
      <ul
        className="mb-[48px] list-disc pt-3 px-4 pb-[10px]"
        aria-live="polite"
      >
        {ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="md:flex justify-between items-center rounded-lg bg-[#F0EFEB] px-[28px] py-[18px] w-full">
          <div>
            <h3 className="text-[1.125rem] font-medium leading-[24px]">
              Ready for a recipe?
            </h3>
            <p className="text-[#6B7280] text-[0.875rem] leading-[20px] mt-2">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button
            disabled={props.loading}
            onClick={props.getRecipe}
            className="rounded-md bg-[#D17557] shadow-sm text-[#FAFAF8] px-[17px] py-[9px] text-[0.875rem] font-sans cursor-pointer mt-4 md:mt-0 w-full sm:w-auto"
          >
            {props.loading ? "Loading..." : "Get Recipe"}
          </button>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;
