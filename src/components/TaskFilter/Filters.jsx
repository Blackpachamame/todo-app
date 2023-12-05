import PropTypes from "prop-types";

const ItemsLeft = ({ total }) => {
  return (
    <p className="pt-1 text-dtDarkGrayishBlue text-[11px] sm:text-sm">
      {total} items left
    </p>
  );
};

const FilterButton = ({ action, active, filter }) => {
  return (
    <button
      onClick={action}
      className={
        `pt-1 text-[15px] text-dtDarkGrayishBlue hover:text-dtLightGrayishBlueHover font-bold cursor-pointer transition-all duration-300 ease-in-out ` +
        (active.toLowerCase().includes(filter.toLowerCase())
          ? "text-brightBlue"
          : "text-dtDarkGrayishBlue")
      }
    >
      {filter}
    </button>
  );
};

export { ItemsLeft, FilterButton };

ItemsLeft.propTypes = {
  total: PropTypes.number,
};

FilterButton.propTypes = {
  action: PropTypes.func,
  active: PropTypes.string,
  filter: PropTypes.string,
};