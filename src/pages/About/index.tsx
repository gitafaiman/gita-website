import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import useQuerySection from "../../../common/hooks/useQuerySection";
import { SocialIcon, SocialLinks } from "../../styles";
import {
  AboutCard,
  AboutContainer,
  Cta,
  Heading,
  Paragraph,
  ProfilePic,
  ResumeLink,
  UnderlineAnimation,
} from "./styles";

const About: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { updateQuery } = useQuerySection(isClicked);

  const handleNavClick = (section: string) => {
    setIsClicked(true);
    updateQuery(section);
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <AboutContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <AboutCard>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ProfilePic src="/profile.jpg" alt="Gita Faiman" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Heading>Hi! I’m Gita Faiman</Heading>
          </motion.div>
          {[
            "I’m the developer behind this website. A passionate full-stack developer, always exploring new ways to bring creativity and functionality together through code.",
            "From crafting clean designs to solving tricky problems, I love the challenge of turning ideas into interactive experiences.",
            "When I’m not coding, you’ll find me diving into new languages (both spoken and programming) or enjoying some downtime with a good book and matcha.",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Paragraph>{text}</Paragraph>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Cta>
              <UnderlineAnimation onClick={() => handleNavClick("contact")}>
                Thanks for stopping by—take a look around and feel free to{" "}
                <strong>reach out!</strong>
              </UnderlineAnimation>
            </Cta>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ResumeLink>
              <a href="/Gita Faiman Resume.pdf" target="_blank">
                View My Resume
                <FaArrowUpRightFromSquare size={20} />
              </a>
            </ResumeLink>
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
          </motion.div>
        </AboutCard>
      </motion.div>
    </AboutContainer>
  );
};

export default About;
