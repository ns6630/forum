import styled from "styled-components/macro";
import React from "react";
import {User} from "../types/User";
import Container from "./Container";
import Logo from "./Logo";

export interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <StickyHeader>
      <Container>
        <LeftHeaderColumn>
          <Logo/>
          <StyledName>forum</StyledName>
        </LeftHeaderColumn>
        <MiddleHeaderColumn></MiddleHeaderColumn>
        <RightHeaderColumn></RightHeaderColumn>
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


const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const LeftHeaderColumn = styled(HeaderColumn)`
  flex: 0 0 200px;
`;

const MiddleHeaderColumn = styled(HeaderColumn)`
  flex: 1;
`;

const RightHeaderColumn = styled(HeaderColumn)`
  flex: 0 0 200px;
  justify-content: flex-end;
`;

const StyledName = styled.div`
  color: #3d5af1;
  margin-left: 1em;
  font-weight: bold;
`

export default Header;
