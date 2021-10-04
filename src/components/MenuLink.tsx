import styled from "styled-components/macro";
import {NavLink} from "react-router-dom";

const MenuLink = styled(NavLink)`
  text-decoration: none;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  padding: 1em;
  color: #8f8f8f;
  border-left: 5px solid rgba(0, 0, 0, 0);

  &.active {
    color: #3d5af1;
    border-left: 5px solid #3d5af1;
    background: #e8ebfb;
  }
  > svg {
    margin-right: .5em;
  }
`;

export default MenuLink;