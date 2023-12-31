import { useContext } from "react";
import { MainContext } from "../../context/Main/MainContext";
import PropTypes from "prop-types";

const ItemsLeft = () => {
  const { filteredTask } = useContext(MainContext);

  let tasksCompleted = filteredTask.filter(function (task) {
    return task.completed === false;
  });

  return (
    <p className="pt-1 text-dtDarkGrayishBlue text-xs sm:text-sm">
      {tasksCompleted.length} items left
    </p>
  );
};

const FilterButton = ({ action, active, filtro }) => {
  return (
    <button
      onClick={action}
      className={
        `pt-1 text-[15px] hover:text-veryDarkGrayishBlue dark:hover:text-dtLightGrayishBlueHover font-bold cursor-pointer transition-all duration-300 ease-in-out ` +
        (active.toLowerCase().includes(filtro.toLowerCase())
          ? "text-brightBlue"
          : "text-dtDarkGrayishBlue dark:text-dtDarkGrayishBlue")
      }
    >
      {filtro}
    </button>
  );
};

export { ItemsLeft, FilterButton };

FilterButton.propTypes = {
  action: PropTypes.func,
  active: PropTypes.string,
  filtro: PropTypes.string,
};
