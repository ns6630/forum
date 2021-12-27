import styled from "styled-components/macro";
import FooterLink from "./FooterLink";
import React from "react";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLink to={"/"}>Help</FooterLink>
      <FooterLink to={"/"}>About</FooterLink>
      <FooterLink to={"/"}>Forum Pro</FooterLink>
      <FooterLink to={"/"}>Careers</FooterLink>
      <FooterLink to={"/"}>Topics</FooterLink>
      <FooterLink to={"/"}>Press</FooterLink>
      <FooterLink to={"/"}>Top Topics</FooterLink>
      <FooterLink to={"/"}>Terms</FooterLink>
      <FooterLink to={"/"}>Blog</FooterLink>
      <FooterLink to={"/"}>Privacy policy</FooterLink>
      <FooterLink to={"/"}>Advertise</FooterLink>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  font-size: 0.7rem;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 15px 15px -3px rgba(143, 143, 143, 0.1);
  padding: 20px;
`;

export default Footer;
