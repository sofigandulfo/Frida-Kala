import PropTypes from 'prop-types';
import './ButtonLink.css';
import { Link } from 'react-router-dom';

function ButtonLink({ buttonText, className, to }) {
  return (
    <>
      <Link className={className} to={to}>{buttonText}</Link>
    </>
  );
}

ButtonLink.propTypes = {
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default ButtonLink;
