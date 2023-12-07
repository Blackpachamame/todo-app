import PropTypes from "prop-types";
import { MainContext } from "./MainContext";

export const MainProvider = ({ children }) => {
  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};

MainProvider.propTypes = {
  children: PropTypes.any,
};
