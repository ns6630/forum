import styled from "styled-components/macro";
import {Link} from "react-router-dom";

const ButtonLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #3d5af1;
  color: #ffffff;
  padding: 1em;
  border-radius: 5px;
  font-size: .875rem;
  top: 0;
  transition: transform .1s;

  &:hover {
    background: #4a66f2;
  }

  &:active {
    transform: translateY(2px);
  }

  > svg {
    margin-right: .5em;
  }
`;

export default ButtonLink;