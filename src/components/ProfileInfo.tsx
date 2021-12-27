import React from "react";
import { authenticationApi } from "../App";
import Link from "./Link";
import { observer } from "mobx-react-lite";
import UserPhoto from "./UserPhoto";
import styled from "styled-components/macro";
import LinkButton from "./LinkButton";

const ProfileInfo: React.FC = () => {
  return (
    <div>
      {!authenticationApi.isAuthenticated() ? (
        <Link to={"/sign-in"}>Sign in</Link>
      ) : (
        <StyledProfileInfo>
          <UserPhoto imgPath={authenticationApi.user!.photoPath} />
          {authenticationApi.user!.nickname}
          <ProfileInfoPanel>
            <LinkButton onClick={() => authenticationApi.signOut()}>
              Sign out
            </LinkButton>
          </ProfileInfoPanel>
        </StyledProfileInfo>
      )}
    </div>
  );
};

const ProfileInfoPanel = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: none;
  border-radius: 5px;
  box-shadow: 0 2px 15px -3px rgb(143 143 143 / 50%), 0 10px 10px -3px rgb(0 0 0 / 30%);
  padding: .5em 1em;
  background: white;
  min-width: 120px;
`;

const StyledProfileInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: visible;
  padding: .5em 0;
  cursor: default;

  &:hover ${ProfileInfoPanel} {
    display: block;
  }
`;

export default observer(ProfileInfo);
