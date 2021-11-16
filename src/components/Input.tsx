import React from "react";
import styled from "styled-components/macro";

export interface InputProps {
  placeholder?: string;
  value?: string;
  kind?: "text" | "password" | "email";
  onInput?: (event: any) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, kind, onInput }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={kind ?? "text"}
      onInput={onInput}
      value={value}
    />
  );
};

export const StyledInput = styled.input`
  font-size: 16px !important;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  display: block;
  line-height: 2rem;
  padding: 0 .5rem;
  &:-webkit-autofill {
    font-size: 16px;
  }
`;

export default Input;
