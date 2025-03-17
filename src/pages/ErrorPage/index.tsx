import { motion } from "motion/react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, SectionWrapper } from '../../../common/components/NavBar/styles';
import { ButtonContainer, ErrorMessage, ErrorPageContainer, GifContainer } from './styles';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };
  const paragraphText = "The page you're looking for might have been moved or doesn't exist."
  return (
    <PageContainer>
      <SectionWrapper>
        <ErrorPageContainer>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <GifContainer>
              <img src="/coming_soon.gif" alt="Comming Soon" />
            </GifContainer>
          </motion.div>
          <div>
            <ErrorMessage>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h2>Oops! Page not found</h2>
              </motion.div>
              <motion.p
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  textAlign: "center"
                }}>
                {paragraphText.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring", stiffness: 100, damping: 10, delay: 0.5 + index * 0.1,
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                    style={{ marginRight: "5px" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>

            </ErrorMessage>

            <ButtonContainer>
              <button onClick={handleBackToHome}>Go Back to Home</button>
            </ButtonContainer>
          </div>
        </ErrorPageContainer>
      </SectionWrapper>
    </PageContainer>
  );
};

export default ErrorPage;
