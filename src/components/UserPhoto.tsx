import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export interface UserPhotoProps {
  imgPath: string;
  className?: string;
}

const UserPhoto: React.FC<UserPhotoProps> = ({ imgPath, className }) => {
  return (
    <StyledUserPhoto className={className}>
      {imgPath && <img src={imgPath} alt={"photo"} />}
      {!imgPath && <FontAwesomeIcon icon={faCircleUser} />}
    </StyledUserPhoto>
  );
};

const StyledUserPhoto = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;

  > img {
    border-radius: 50%;
    width: 100%;
  }

  > svg {
    width: 100%;
    height: 100%;
  }
`;

export default UserPhoto;
