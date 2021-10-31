import styled from "styled-components/macro";
import React from "react";
import { User } from "../types/User";
import Container from "./Container";
import Logo from "./Logo";

export interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <StickyHeader>
      <Container>
        <StyledHeader>
          <Logo />
        </StyledHeader>
      </Container>
    </StickyHeader>
  );
};

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  overflow: auto;
  background: #ffffff;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
`;

export default Header;
