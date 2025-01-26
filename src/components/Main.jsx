const Main = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListItems = ingredients.map((ingred, index) => (
    <li key={index}>{ingred}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);
  }
  return (
    <main className="pt-[30px] px-[30px] pb-[10px]">
      <form
        className="flex justify-center h-[38px] gap-[12px]"
        onSubmit={handleSubmit}
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
      <ul>{ingredientsListItems}</ul>
    </main>
  );
};

export default Main;
