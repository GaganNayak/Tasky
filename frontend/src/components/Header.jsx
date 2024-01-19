import PropTypes from "prop-types";
import Button from "./button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "#0066b2" : "#00308F"}
        onClick={onAdd}
        text={showAddTask ? "Close" : "Add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Manager",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
