import "./Icons.css";
import Icon1 from "../../assets/instagram.jsx";
import Icon2 from "../../assets/linkedin.jsx";
import Icon3 from "../../assets/github.jsx";

function Icons() {
  return (
    <div className="socialMedia-footer">
      <hr></hr>
      <div className="socialMedia">
        <a
          href="https://www.instagram.com/sofigandulfo"
          target="_blank"
          rel="noreferrer"
        >
          <Icon1 className="socialMedia-icon" />
        </a>
        <a
          // href="https://www.linkedin.com/in/sofia-gandulfo-0a70a0265/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon2 className="socialMedia-icon" />
        </a>
        <a
          href="https://github.com/sofigandulfo"
          target="_blank"
          rel="noreferrer"
        >
          <Icon3 className="socialMedia-icon" />
        </a>
      </div>
      <hr></hr>
    </div>
  );
}

export default Icons;
