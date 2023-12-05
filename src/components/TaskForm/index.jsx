import { useState } from "react";
import PropTypes from "prop-types";

export default function TaskForm({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleAddTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="h-12 sm:h-16 mt-10 mb-4 sm:mt-[50px] sm:mb-6 px-5 sm:px-6 flex gap-3 sm:gap-5 items-center bg-[white] dark:bg-dtVeryDarkDesaturatedBlue rounded shadow-xl">
      <span className="min-w-[20px] h-5 sm:min-w-[24px] sm:h-6 border border-lightGrayishBlue dark:border-dtVeryDarkGrayishBlue border-solid rounded-full"></span>
      <input
        className="w-full pt-[3px] bg-[white] dark:bg-dtVeryDarkDesaturatedBlue text-[11px] sm:text-base outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleAddTodo(e)}
        placeholder="Create a new todo..."
      />
    </div>
  );
}

TaskForm.propTypes = {
  addTodo: PropTypes.func,
};
