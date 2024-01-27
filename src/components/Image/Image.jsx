import PropTypes from 'prop-types';
import './Image.css'
function Image({className}) {
  return (
    <>
        <img className={className} src="#"/>
    </>
  )
}

export default Image


Image.propTypes = {
  className: PropTypes.string.isRequired
};