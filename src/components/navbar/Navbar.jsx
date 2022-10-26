import { NavLink } from "react-router-dom";
import StyledNavbar from "../navbar/Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to="">Recipe</NavLink>
      <NavLink to="/about">About</NavLink>
    </StyledNavbar>
  );
};

export default Navbar;
