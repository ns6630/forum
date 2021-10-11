import styled from "styled-components/macro";
import IconButton, { IconButtonProps } from "./IconButton";
import React from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrowUpButton: React.FC<IconButtonProps> = ({ children, ...props }) => {
  return (
    <StyledArrowUpButton {...props}>
      <FontAwesomeIcon icon={faArrowUp} />
    </StyledArrowUpButton>
  );
};

export const StyledArrowUpButton = styled(IconButton)`
  &:active {
    transform: translateY(-2px);
  }
`;

export default ArrowUpButton;
