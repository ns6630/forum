import styled from "styled-components/macro";
import React from "react";

const Menu: React.FC = ({ children }) => {
  return (
    <StyledMenu>
      <MenuList>
        {React.Children.toArray(children).map((child, index) => (
          <MenuItem key={index}>{child}</MenuItem>
        ))}
      </MenuList>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  flex: 0 0 200px;
`;

const MenuList = styled.ul`
  position: sticky;
  top: 120px;
  padding-left: 0;
  list-style-type: none;
  margin: 0;
`;

const MenuItem = styled.li``;

export default Menu;
