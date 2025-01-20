import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  AboutCard,
  AboutContainer,
  Cta,
  Heading,
  Paragraph,
  ProfilePic,
  SocialIcon,
  SocialLinks,
} from "../../common/components/NavBar/styles";
import useQuerySection from "../../common/hooks/useQuerySection";

const About: React.FC = () => {
  // Use the custom hook to reset the query to the Contact section
  const { updateSection } = useQuerySection();

  return (
    <AboutContainer>
      <AboutCard>
        <ProfilePic src="/profile.jpg" alt="Gita Faiman" />
        <Heading>Hi! I’m Gita Faiman</Heading>
        <Paragraph>
          I’m the developer behind this website. <br />A passionate full-stack
          developer-in-training, always exploring new ways to bring creativity
          and functionality together through code.
        </Paragraph>
        <Paragraph>
          From crafting clean designs to solving tricky problems, I love the
          challenge of turning ideas into interactive experiences.
        </Paragraph>
        <Paragraph>
          When I’m not coding, you’ll find me diving into new languages (both
          spoken and programming) or enjoying some downtime with a good book and
          coffee.
        </Paragraph>
        <Cta>
          <span
            onClick={() => updateSection("contact")}
            style={{ color: "#a0cbd6", cursor: "pointer" }}
          >
            Thanks for stopping by—take a look around and feel free to reach
            out!
          </span>
        </Cta>
        <SocialLinks>
          <SocialIcon
            href="https://github.com/gitafaiman"
            target="_blank"
            title="GitHub"
          >
            <FaGithub size={30} />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/reachglevin/"
            target="_blank"
            title="LinkedIn"
          >
            <FaLinkedin size={30} />
          </SocialIcon>
          <SocialIcon
            href="mailto:reachglevin@gmail.com"
            target="_blank"
            title="Email"
          >
            <FaEnvelope size={30} />
          </SocialIcon>
        </SocialLinks>
      </AboutCard>
    </AboutContainer>
  );
};

export default About;
