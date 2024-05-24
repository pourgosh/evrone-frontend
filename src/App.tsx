import { StyledNav } from "./Components/NavBar/Navbar.styles";
import Router from "./Routes";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <StyledNav display={"flex"} />
      <Router />
    </>
  );
}

export default App;
