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
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
      <ItemsLeft total={total} />
      <div className="flex items-center space-x-2">
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
        className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
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
