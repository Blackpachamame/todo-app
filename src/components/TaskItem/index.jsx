import PropTypes from "prop-types";
import { iconCheck } from "../../assets/images";
import { iconCross } from "../../assets/images";

export default function TaskItem({ todo, handleSetComplete, handleDelete }) {
  const { id, title, completed } = todo;

  return (
    <div className="task h-[52px] sm:h-16 flex items-center justify-between gap-3 px-5 sm:px-6 border-b border-veryLightGrayishBlue dark:border-dtVeryDarkGrayishBlue2">
      <div className="flex items-center gap-3 sm:gap-5 overflow-hidden">
        <button
          onClick={() => handleSetComplete(id)}
          className={
            `border-gradient relative min-w-[20px] h-5 sm:min-w-[24px] sm:h-6 border border-lightGrayishBlue dark:border-dtVeryDarkGrayishBlue border-solid rounded-full cursor-pointer ` +
            (completed ? "check" : " ")
          }
        >
          {completed && (
            <img
              className="w-[9px] h-[7px] sm:w-[11px] sm:h-[9px] absolute top-2/4 left-2/4 translate-x-[-45%] translate-y-[-45%]"
              src={iconCheck}
              alt="Check Icon"
              width={11}
              height={9}
            />
          )}
        </button>
        {completed ? (
          <strike className="pt-[3px] text-[11px] sm:text-base text-darkGrayishBlue dark:text-dtVeryDarkGrayishBlue">
            {title}
          </strike>
        ) : (
          <p className="pt-[3px] text-[11px] sm:text-base truncate">{title}</p>
        )}
      </div>

      <img
        onClick={() => handleDelete(id)}
        className="close w-3 h-3 sm:w-[18px] sm:h-[18px] cursor-pointer opacity-0 transition-all duration-300 ease-in"
        src={iconCross}
        alt="Close Icon"
        width={18}
        height={18}
      />
    </div>
  );
}

TaskItem.propTypes = {
  todo: PropTypes.object,
  handleSetComplete: PropTypes.func,
  handleDelete: PropTypes.func,
};
