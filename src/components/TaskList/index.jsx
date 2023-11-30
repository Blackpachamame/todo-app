import PropTypes from "prop-types";
import TaskItem from "../TaskItem";
import TaskFilter from "../TaskFilter";

{
  /* <div className="flex flex-col bg-[white] dark:bg-dtVeryDarkBlue rounded shadow-2xl">
        <div className="h-[52px] p-5 flex justify-between items-center border-b border-veryLightGrayishBlue dark:border-dtVeryDarkGrayishBlue2">
          unItem
        </div>
        <div className="w-full h-[50px] p-5 flex justify-between items-center text-dtDarkGrayishBlue">
          <p>5 items left</p>
          <p>Clear Completed</p>
        </div>
      </div>
      <div className="w-full h-12 flex justify-center items-center gap-4 bg-[white] dark:bg-dtVeryDarkBlue text-dtDarkGrayishBlue font-bold rounded shadow-xl">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div> */
}

export default function TaskList({
  todos,
  activeFilter,
  handleSetComplete,
  handleDelete,
  handleClearComplete,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
}) {
  return (
    <div className="flex flex-col bg-[white] dark:bg-dtVeryDarkBlue rounded shadow-2xl">
      {todos.map((todo) => (
        <TaskItem
          key={todo.id}
          todo={todo}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
        />
      ))}
      <TaskFilter
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
      />
    </div>
  );
}

TaskList.propTypes = {
  todos: PropTypes.array,
  activeFilter: PropTypes.string,
  handleSetComplete: PropTypes.func,
  handleDelete: PropTypes.func,
  handleClearComplete: PropTypes.func,
  showAllTodos: PropTypes.func,
  showActiveTodos: PropTypes.func,
  showCompletedTodos: PropTypes.func,
};
