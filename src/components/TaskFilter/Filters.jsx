import PropTypes from "prop-types";

const ItemsLeft = ({ total }) => {
  return <p className="text-gray-400 text-sm">{total} items left</p>;
};

const FilterButton = ({ action, active, filter }) => {
  return (
    <button
      onClick={action}
      className={
        ` hover:text-white cursor-pointer transition-all duration-300 ease-in-out ` +
        (active.toLowerCase().includes(filter.toLowerCase())
          ? "text-blue-400"
          : "text-gray-400")
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
