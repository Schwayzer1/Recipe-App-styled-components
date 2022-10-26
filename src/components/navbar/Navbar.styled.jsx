import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: #e0f1dd;
  font-size: 1.1rem;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 1rem;
  color: #01475f;
  display: ${({ primary }) => primary && "flex"};
  justify-content: ${({ primary }) => primary && "space-evenly"};
  align-items: ${({ primary }) => primary && "center"};
`;

export const Anchor = styled.a`
  text-decoration: none;
  margin: 0 1rem;
  color: #01475f;
`;

export default StyledNavbar;
