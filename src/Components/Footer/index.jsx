import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
        <img className="footer-logo" src="/Images/logoartlab-W.png" alt="white-logo"/>
        <Link to="/about-us">
          About us 
        </Link>
        <Link to="/terms" >
           Terms of service
        </Link>
    </div>
  );
}

export default Footer;