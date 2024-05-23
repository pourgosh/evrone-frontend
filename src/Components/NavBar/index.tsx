import { Div, Nav } from "./index.styles";

const NavBar = () => {
  return (
    <Nav>
      <Div display={"flex"} justifyc={"flex-start"}>
        <p>evrone</p>
      </Div>
      <Div display={"flex"} justifyc={"flex-end"}>
        <button>Menu</button>
      </Div>
    </Nav>
  );
};

export default NavBar;
