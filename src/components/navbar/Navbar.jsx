import { Anchor, StyledNavLink } from "../navbar/Navbar.styled";
import StyledNavbar from "../navbar/Navbar.styled";
import meal2 from "../../assets/meal2.svg";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavLink to="/" primary>
        <img src={meal2} width="50px" alt="" />
        RECIPE
      </StyledNavLink>
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
