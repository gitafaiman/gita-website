import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
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

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().matches(/^\d{10}$/, "Phone must be 10 digits"),
  message: yup.string().required("Message cannot be empty"),
});

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

  const checkIfMobile = () => {
    return window.innerWidth < 768;
  };

  useEffect(() => {
    setIsMobile(checkIfMobile());

    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };

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
        headers: {
          "Content-Type": "application/json",
        },
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
        
        // Reset reCAPTCHA widget after successful submission
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } catch (error) {
        toast.error("❌ Failed to send message. Try again.");
        console.error("Email.js error:", error);
      }
    } catch (error) {
      toast.error("❌ Failed to verify reCAPTCHA. Please try again.");
      console.error("reCAPTCHA verification error:", error);
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>

        <div className="left-section">
          <ContactText>
            <h1>
              Let’s chat. <br />
              Tell me about your project. <br />
            </h1>
            <h4>Let’s create something together✨</h4>
          </ContactText>
        </div>

        <ContactRight>
          <FormHeading>Shoot me a message 🚀</FormHeading>

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
        </ContactRight>
      </ContactContainer>

      <ToastContainer position="top-right" autoClose={3000} />
    </ContactSection>
  );
};

export default Contact;
