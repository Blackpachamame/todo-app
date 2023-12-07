import { useState, useContext } from "react";
import { MainContext } from "./../../context/MainContext";
import { v4 as uuidv4 } from "uuid";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(MainContext);

  const handleAddTask = (e) => {
    let nuevaTask = {
      id: uuidv4(),
      title,
      completed: false,
    };
    if (e.key.toLowerCase() === "enter") {
      addTask(nuevaTask);
      setTitle("");
    }
  };

  return (
    <div className="h-12 sm:h-16 mt-[34px] mb-4 sm:mt-10 sm:mb-6 px-5 sm:px-6 flex gap-3 sm:gap-5 items-center bg-[white] dark:bg-dtVeryDarkDesaturatedBlue rounded-[5px] shadow-xl">
      <span className="min-w-[20px] h-5 sm:min-w-[24px] sm:h-6 border border-lightGrayishBlue dark:border-dtVeryDarkGrayishBlue border-solid rounded-full"></span>
      <input
        className="w-full pt-[3px] bg-[white] dark:bg-dtVeryDarkDesaturatedBlue text-xs sm:text-lg outline-none"
        type="text"
        value={title}
        name="newTask"
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleAddTask(e)}
        placeholder="Create a new todo..."
      />
    </div>
  );
}
