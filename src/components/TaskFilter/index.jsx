import { useContext } from "react";
import { MainContext } from "../../context/Main/MainContext";
import { FilterButton, ItemsLeft } from "./Filters";

export default function TaskFilter() {
  const {
    activeFilter,
    showAllTasks,
    showActiveTasks,
    showCompletedTasks,
    handleClearComplete,
  } = useContext(MainContext);

  return (
    <div className="h-[50px] relative flex items-center justify-between px-5 sm:px-6">
      <ItemsLeft />
      <div className="sm:w-0 w-full h-[48px] absolute top-0 left-0 translate-y-[70px] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 bg-[white] dark:bg-dtVeryDarkDesaturatedBlue flex justify-center items-center gap-5 rounded-[5px] shadow-2xl sm:shadow-none">
        <FilterButton
          action={() => showAllTasks()}
          active={activeFilter}
          filtro="All"
        />
        <FilterButton
          action={() => showActiveTasks()}
          active={activeFilter}
          filtro="Active"
        />
        <FilterButton
          action={() => showCompletedTasks()}
          active={activeFilter}
          filtro="Completed"
        />
      </div>
      <button
        onClick={() => handleClearComplete()}
        className="pt-1 text-dtDarkGrayishBlue hover:text-veryDarkGrayishBlue dark:hover:text-dtLightGrayishBlueHover text-xs sm:text-sm cursor-pointer transition-all duration-300 ease-in-out"
      >
        Clear Completed
      </button>
    </div>
  );
}
