import PropTypes from "prop-types";
import { FilterButton, ItemsLeft } from "./Filters";

export default function TaskFilter({
  total,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleClearComplete,
}) {
  return (
    <div className="h-[50px] relative flex items-center justify-between px-5 sm:px-6">
      <ItemsLeft total={total} />
      <div className="sm:w-0 w-full h-[48px] absolute top-0 left-0 translate-y-[70px] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 bg-[white] dark:bg-dtVeryDarkDesaturatedBlue flex justify-center items-center gap-5 rounded-[5px] shadow-2xl sm:shadow-none">
        <FilterButton
          action={() => showAllTodos()}
          active={activeFilter}
          filter="All"
        />
        <FilterButton
          action={() => showActiveTodos()}
          active={activeFilter}
          filter="Active"
        />
        <FilterButton
          action={() => showCompletedTodos()}
          active={activeFilter}
          filter="Completed"
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

TaskFilter.propTypes = {
  total: PropTypes.number,
  activeFilter: PropTypes.string,
  showAllTodos: PropTypes.func,
  showActiveTodos: PropTypes.func,
  showCompletedTodos: PropTypes.func,
  handleClearComplete: PropTypes.func,
};
