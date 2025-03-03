import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import Field from "../../common/components/Field";

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

  const onSubmit = async (data: any) => {
    if (!recaptchaToken) {
      toast.error("Please verify that you're not a robot.");
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
      setRecaptchaToken(null); // Reset captcha
    } catch (error) {
      toast.error("❌ Failed to send message. Try again.");
      console.error("Email.js error:", error);
    }
  };

  return (
    <section id="contact" className="py-10 px-5 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <Field label="Name" type="text" {...register("name")} />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <Field label="Email" type="email" {...register("email")} />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <Field label="Phone" type="text" {...register("phone")} />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

        <Field label="Message" type="text" {...register("message")} />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        {/* Google reCAPTCHA */}
        <div className="flex justify-center my-4">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={(token) => setRecaptchaToken(token)}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
