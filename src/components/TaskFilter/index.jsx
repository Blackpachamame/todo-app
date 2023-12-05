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
    <div className="h-[50px] flex items-center justify-between px-5 sm:px-6">
      <ItemsLeft total={total} />
      <div className="flex items-center gap-4">
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
        className="pt-1 text-dtDarkGrayishBlue hover:text-dtLightGrayishBlueHover text-[11px] sm:text-sm cursor-pointer transition-all duration-300 ease-in-out"
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
