import PropTypes from 'prop-types';
import './Image.css';

const Image = ({ className, src, onClick }) => {
  return (
    <>
      <img className={className} src={src} onClick={onClick}/>

      
    </>
  )
}

Image.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,

};

export default Image;

