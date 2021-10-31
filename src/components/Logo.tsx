import styled from "styled-components/macro";
import logo from "../logo.png";

const Logo = styled.img.attrs((props) => ({
  src: logo,
}))`
  width: 40px;
  height: 40px;
  display: block;
`;

export default Logo;
