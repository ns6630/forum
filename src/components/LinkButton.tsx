import styled from "styled-components/macro";

const LinkButton = styled.button`
  color: #3d5af1;
  text-decoration: none;
  font-weight: bold;
  border: none;
  background: none;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default LinkButton;