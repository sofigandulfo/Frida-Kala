import './Icons.css'
import Icon1 from "../../assets/instagram.jsx";
import Icon2 from "../../assets/linkedin.jsx";
import Icon3 from "../../assets/github.jsx";

function Icons() {
  return (
    <div className='socialMedia-footer'>
      <hr></hr>
      <div className="socialMedia">
        <Icon1 className="socialMedia-icon"></Icon1>
        <Icon2 className="socialMedia-icon"></Icon2>
        <Icon3 className="socialMedia-icon"></Icon3>
      </div>
      <hr></hr>
    </div>
  );
}

export default Icons;
