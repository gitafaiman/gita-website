import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import Field from "../../../common/components/Field";
import {
  ContactContainer,
  ContactForm,
  ContactRight,
  ContactSection,
  ContactText,
  FormHeading,
  SendButton
} from "./styles";
import { CustomToastContainer } from '../../styles';

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().matches(/^\d{10}$/, "Phone must be 10 digits"),
  message: yup.string().required("Message cannot be empty"),
});

const textLines = [
  "Let’s chat.",
  "Tell me about your project.",
];

const words = ["Let’s create something together✨"];

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const checkIfMobile = () => window.innerWidth < 768;

  useEffect(() => {
    setIsMobile(checkIfMobile());
    const handleResize = () => setIsMobile(checkIfMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSubmit = async (data: any) => {
    if (!recaptchaToken) {
      toast.error("Please verify that you're not a robot.");
      return;
    }

    const recaptchaVerifyUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/gita-faiman-webs-1740695756545/assessments?key=${import.meta.env.VITE_RECAPTCHA_API_KEY}`;

    try {
      const verificationResponse = await fetch(recaptchaVerifyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: {
            token: recaptchaToken,
            expectedAction: "contact_form_submission",
            siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
          },
        }),
      });

      const verificationResult = await verificationResponse.json();
      if (!verificationResult.tokenProperties.valid) {
        toast.error("reCAPTCHA verification failed. Please try again.");
        return;
      }

      toast.info("Sending your message...");

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          { ...data, "g-recaptcha-response": recaptchaToken },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        toast.success("✅ Message sent successfully!");
        reset();
        setRecaptchaToken(null);

        if (recaptchaRef.current) recaptchaRef.current.reset();
      } catch (error) {
        toast.error("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      toast.error("❌ Failed to verify reCAPTCHA. Please try again.");
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <div className="left-section">
          <ContactText>
            {textLines.map((line, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.5,
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {line}
              </motion.h1>
            ))}
            <motion.h4>
              {words[0].split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.6 + index * 0.2,
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ display: "inline-block", marginRight: "5px" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h4>
          </ContactText>
        </div>
        <ContactRight>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.0,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <FormHeading>Shoot me a message 🚀</FormHeading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
              <Field label="Name *" type="text" {...register("name")} error={errors.name?.message} />
              <Field label="Email *" type="email" {...register("email")} error={errors.email?.message} />
              <Field label="Phone" type="text" {...register("phone")} error={errors.phone?.message} />
              <Field label="Message *" type="text" {...register("message")} error={errors.message?.message} />

              {!isMobile && (
                <div className="d-flex justify-content-center my-4">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={(token) => setRecaptchaToken(token)}
                    ref={recaptchaRef}
                  />
                </div>
              )}

              <SendButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </SendButton>
            </ContactForm>
          </motion.div>
        </ContactRight>
      </ContactContainer>

      <CustomToastContainer position="top-right" autoClose={3000} />
    </ContactSection>
  );
};

export default Contact;
