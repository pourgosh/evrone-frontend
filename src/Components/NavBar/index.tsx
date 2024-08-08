import { PiGlobe } from "react-icons/pi";

type NavBarProps = {
  className: string;
};

const NavBar = ({ className }: NavBarProps): JSX.Element => {
  return (
    <nav className={className}>
      {/*logo */}
      <div className="logoContainer">
        <p>evrone</p>
      </div>
      {/*items */}
      <div className="navItemsContainer">
        <div className="listContainer">
          <div className="navItem">
            <p>Services</p>
          </div>

          <div className="navItem">
            <p>Technologies</p>
          </div>
          <div className="navItem">
            <p>Industries</p>
          </div>
          <div className="navItem">
            <p>Solutions</p>
          </div>
          <div className="navItem">
            <p>Cases</p>
          </div>
          <div className="navItem">
            <p>About</p>
          </div>
          <div className="navItem">
            <PiGlobe />
          </div>
        </div>
        <div className="menu">
          <p>Menu</p>
        </div>
        <div className="letsTalk">
          <p>Let`s Talk</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
