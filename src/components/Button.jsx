import PropTypes from "prop-types";

const Button = ({ styles, title }) => (
  <button className={`font-openSans text-white font-bold rounded-full px-4 ${styles}`}>{title}</button>
);

Button.propTypes = {
  styles: PropTypes.string,
  title: PropTypes.string,
};
export default Button;
