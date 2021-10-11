import styled from "styled-components/macro";

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  transition: transform 0.1s;
  color: #8f8f8f;
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

export interface IconButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default IconButton;
