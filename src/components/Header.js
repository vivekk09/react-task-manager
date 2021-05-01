import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClickHandler = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="blue" text="Add" onClick={onClickHandler} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Manager",
};

Header.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
