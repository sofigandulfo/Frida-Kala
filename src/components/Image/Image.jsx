import PropTypes from 'prop-types';
import './Image.css';

const Image = ({ className, src }) => {
  return (
    <>
      <img className={className} src={src} />
    </>
  )
}

Image.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,

};

export default Image;