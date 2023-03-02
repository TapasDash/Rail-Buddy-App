import "../../styles/header.scss";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RiTrainLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div>
          <BiArrowBack />
          <Link to="/">
            <RiTrainLine />
          </Link>
        </div>
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
