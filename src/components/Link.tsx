import styled from "styled-components/macro";
import { Link as BaseLink } from "react-router-dom";

const Link = styled(BaseLink)`
  color: #3d5af1;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default Link;
