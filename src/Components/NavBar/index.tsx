type NavBarProps = {
  className: string;
};

const NavBar = ({ className }: NavBarProps): JSX.Element => {
  return (
    <nav className={className}>
      <div>
        <p>evrone</p>
      </div>
      <div>
        <button>Menu</button>
      </div>
    </nav>
  );
};

export default NavBar;
