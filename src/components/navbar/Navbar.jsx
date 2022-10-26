import { NavLink } from "react-router-dom";
import { Anchor, StyledNavLink } from "../navbar/Navbar.styled";
import StyledNavbar from "../navbar/Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to="/">Recipe</NavLink>
      <div>
        <StyledNavLink to="/about">ABOUT</StyledNavLink>
        <Anchor
          href="https://github.com/Schwayzer1/Recipe-App-styled-components"
          target="_blank"
        >
          GITHUB
        </Anchor>
        <StyledNavLink to="/login">LOGOUT</StyledNavLink>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
