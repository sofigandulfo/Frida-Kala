import PropTypes from 'prop-types';
import './Button.css'

function Button({type, children}) {
  return (
    <>
        <input className='input' type={type} value={children}></input>
    </>
  )
}

export default Button


Button.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
  };