import React from "react";
import styled from "styled-components/macro";
import { User } from "../types/User";
import Link from "./Link";
import UserPhoto from "./UserPhoto";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getPresentationRating from "../utils/rating";

export interface TopUsersProps {
  users?: User[];
  you: User | null;
}

const TopUsers: React.FC<TopUsersProps> = ({ users, you }) => {
  return (
    <StyledTopUsers>
      <TopUsersHeader>Top Users</TopUsersHeader>
      <TopUsersList>
        {!users && <TopUsersListItem>nobody</TopUsersListItem>}
        {users?.map((value, index) => {
          return (
            <TopUsersListItem key={index}>
              <TopUserPhoto imgPath={value.photoPath} />
              <Link to={"/"}>{value.nickname}</Link>
              <TopUserRating rating={value.rating} />
            </TopUsersListItem>
          );
        })}
        <TopUsersListItem>
          <TopUserPhoto imgPath={you?.photoPath ?? ""} />
          <Link to={"/"}>{"You"}</Link>
          {you && <TopUserRating rating={you.rating} />}
        </TopUsersListItem>
      </TopUsersList>
    </StyledTopUsers>
  );
};

const StyledTopUsers = styled.article`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 15px 15px -3px rgba(143, 143, 143, 0.1);
  padding: 20px;
  font-size: 0.8rem;
  margin-bottom: 40px;
`;

const TopUsersHeader = styled.h3`
  margin-top: 0;
  color: #444444;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const TopUserPhoto = styled(UserPhoto)`
  width: 20px;
  height: 20px;
  margin-right: 0.5em;
`;

interface TopUserRating {
  rating: number;
}

const TopUserRating: React.FC<TopUserRating> = ({ rating }) => {
  return (
    <StyledTopUserRating>
      {getPresentationRating(rating)}
      <FontAwesomeIcon icon={faArrowUp} />
    </StyledTopUserRating>
  );
};

const StyledTopUserRating = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  font-size: 0.7rem;
  color: #8f8f8f;

  & > svg {
    margin-left: 0.5em;
    color: #3d5af1;
  }
`;

const TopUsersList = styled.ul`
  padding-left: 0;
  margin: 0;
`;

const TopUsersListItem = styled.li`
  list-style: none;
  color: #8f8f8f;
  display: flex;
  align-items: center;
  margin-top: 1rem;

  &:nth-last-child(1) {
    padding-top: 1rem;
    border-top: 1px solid #d9d9d9;
  }
`;

export default TopUsers;
