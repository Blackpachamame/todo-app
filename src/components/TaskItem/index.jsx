import { useContext } from "react";
import { MainContext } from "../../context/Main/MainContext";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PropTypes from "prop-types";
import { iconCheck, iconCross } from "../../assets/images";

export default function TaskItem({ todo }) {
  const { id, title, completed } = todo;
  const { handleSetComplete, handleDelete } = useContext(MainContext);
  const { theme } = useContext(ThemeContext);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="task h-[52px] sm:h-16 bg-[white] dark:bg-dtVeryDarkDesaturatedBlue flex items-center justify-between gap-3 px-5 sm:px-6 first:rounded-t-[5px] border-b border-veryLightGrayishBlue dark:border-dtVeryDarkGrayishBlue2"
    >
      <div className="flex items-center gap-3 sm:gap-5 overflow-hidden">
        <button
          name="item-check"
          onClick={() => handleSetComplete(id)}
          className={
            `border-gradient relative min-w-[20px] h-5 sm:min-w-[24px] sm:h-6 border border-lightGrayishBlue dark:border-dtVeryDarkGrayishBlue border-solid rounded-full cursor-pointer ` +
            (completed ? "check " : " ") +
            (theme === "light" ? "light" : "dark")
          }
        >
          {completed && (
            <img
              className="imgCheck w-[9px] h-[7px] sm:w-[11px] sm:h-[9px] absolute top-2/4 left-2/4 translate-x-[-45%] translate-y-[-45%]"
              src={iconCheck}
              alt="Check Icon"
              width={11}
              height={9}
            />
          )}
        </button>
        {completed ? (
          <span className="line-through pt-[3px] text-xs sm:text-lg truncate text-darkGrayishBlue dark:text-dtVeryDarkGrayishBlue">
            {title}
          </span>
        ) : (
          <p className="pt-[3px] text-xs sm:text-lg truncate">{title}</p>
        )}
      </div>

      <button onClick={() => handleDelete(id)}>
        <img
          className="close w-3 h-3 sm:w-[18px] sm:h-[18px] cursor-pointer opacity-0 transition-all duration-300 ease-in"
          src={iconCross}
          alt="Close Icon"
          width={18}
          height={18}
        />
      </button>
    </div>
  );
}

TaskItem.propTypes = {
  todo: PropTypes.object,
};
