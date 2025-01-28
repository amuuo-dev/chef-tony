/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown";
const TonyRecipe = (props) => {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2 className="mt-6 text-2xl font-semibold">Chef Ducci Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};

export default TonyRecipe;
