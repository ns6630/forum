import styled from "styled-components/macro";
import React from "react";

export interface IconButtonProps {
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  kind?: "default" | "success" | "error";
}

const IconButton = styled.button<IconButtonProps>`
  width: 40px;
  height: 40px;
  transition: transform 0.1s;
  color: ${({ kind = "default" }) => colors[kind]};
  border: none;
  outline: none;
  background: rgba(0, 0, 0, 0);

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px);
  }

  &[disabled] {
    cursor: auto;

    &:active {
      transform: none;
    }
  }
`;

const colors = {
  default: "#8f8f8f",
  success: "#3d5af1",
  error: "#ff304f",
};

export default IconButton;
