/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown";

const TonyRecipe = (props) => {
  return (
    <section
      className="text-gray-700 text-base font-normal leading-7 p-5 md:p-8 rounded-lg w-full max-w-3xl mt-4"
      aria-live="polite"
    >
      <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-900">
        🍽️ Chef Ducci Recommends:
      </h2>
      <div className="mt-4">
        <ReactMarkdown className="prose max-w-none prose-li:mb-2">
          {props.recipe}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default TonyRecipe;
