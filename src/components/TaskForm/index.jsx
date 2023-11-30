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
    // <div className="h-12 p-5 flex items-center bg-[white] dark:bg-dtVeryDarkBlue rounded shadow-xl">
    //   <span className="border border-gray-500 border-solid p-3 rounded-full cursor-pointer"></span>
    // </div>
    <div className="h-12 sm:h-16 mt-10 mb-4 sm:mt-[50px] sm:mb-6 px-4 flex gap-3 items-center bg-[white] dark:bg-dtVeryDarkBlue rounded shadow-xl">
      <div className="flex items-center pointer-events-none">
        <span className="border border-gray-500 border-solid p-3 rounded-full cursor-pointer"></span>
      </div>
      <input
        className="w-full pt-[3px] bg-[white] dark:bg-dtVeryDarkBlue outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleAddTodo(e)}
        placeholder="What's next..."
      />
    </div>
  );
}

TaskForm.propTypes = {
  addTodo: PropTypes.func,
};
