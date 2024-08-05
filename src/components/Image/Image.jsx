import PropTypes from 'prop-types';
import './Image.css';

const Image = ({ src, className, onClick, onLoad }) => (
  <img
    src={src}
    className={className}
    onClick={onClick}
    onLoad={onLoad}
  />
);
Image.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onLoad: PropTypes.func,
};

export default Image;

