import styled from "styled-components/macro";
import {StyledInput} from "./Input";

const Label = styled.label`
  font-size: 0.8rem;
  margin-bottom: 20px;
  display: block;
  
  & ${StyledInput} {
    margin-top: .5rem;
  }
`;

export default Label