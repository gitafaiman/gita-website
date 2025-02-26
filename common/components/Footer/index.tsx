import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  CopyrightText,
  Divider,
  FooterContainer,
  FooterContent,
  Logo,
  SocialIcon,
  SocialLinks
} from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Divider></Divider>
      <FooterContent>
        <SocialLinks>
          <SocialIcon href="https://github.com/gitafaiman" target="_blank" title="GitHub">
            <FaGithub size={30} />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/reachglevin/" target="_blank" title="LinkedIn">
            <FaLinkedin size={30} />
          </SocialIcon>
          <SocialIcon href="mailto:reachglevin@gmail.com" target="_blank" title="Email">
            <FaEnvelope size={30} />
          </SocialIcon>
        </SocialLinks>
        <Logo src="/logo.gif" alt="Logo" />
      </FooterContent>
      <Divider></Divider>
      <CopyrightText>
        Copyright ©2025 GitaFaiman, all rights reserved.<br />
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
