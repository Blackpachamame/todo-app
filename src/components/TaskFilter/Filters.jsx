import PropTypes from "prop-types";

const ItemsLeft = ({ total }) => {
  return <p className="text-dtDarkGrayishBlue text-sm">{total} items left</p>;
};

const FilterButton = ({ action, active, filter }) => {
  return (
    <button
      onClick={action}
      className={
        ` text-dtDarkGrayishBlue font-bold cursor-pointer transition-all duration-300 ease-in-out ` +
        (active.toLowerCase().includes(filter.toLowerCase())
          ? "text-blue-400"
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
