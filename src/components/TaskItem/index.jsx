import PropTypes from "prop-types";
// import { iconCheck } from "../../assets/images";
import { iconCross } from "../../assets/images";

export default function TaskItem({ todo, handleSetComplete, handleDelete }) {
  const { id, title, completed } = todo;

  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-veryLightGrayishBlue dark:border-dtVeryDarkGrayishBlue2">
      <div className="flex items-center gap-3">
        {completed ? (
          // <div
          //   onClick={() => handleSetComplete(id)}
          //   className="bg-green-700 p-1 rounded-full cursor-pointer"
          // >
          //   <img className="h-4 w-4 " src={iconCheck} alt="Check Icon" />
          // </div>
          <div className="check-container">
            <input className="check-box" type="checkbox" />
            <span className="check"></span>
          </div>
        ) : (
          <span
            onClick={() => handleSetComplete(id)}
            className={`border border-gray-500 border-solid p-3 rounded-full cursor-pointer`}
          ></span>
        )}

        <p className={"pt-[3px] " + (completed && "line-through")}>{title}</p>
      </div>

      <img
        onClick={() => handleDelete(id)}
        className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
        src={iconCross}
        alt="Close Icon"
      />
    </div>
  );
}

TaskItem.propTypes = {
  todo: PropTypes.object,
  handleSetComplete: PropTypes.func,
  handleDelete: PropTypes.func,
};
