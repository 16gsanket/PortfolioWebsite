import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
/**
 * Handles form submission by preventing the default action,
 * sending an email using EmailJS with the form data, and
 * setting the loading state.
 *
 * @param {Event} e - The event object from the form submission.
 */

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(form);
    

    try {
      await emailjs.send(
        'service_0qldz3r','template_raexc21',{
          from_name: form.name,
          to_name: "Sanket",
          from_email: form.email,
          to_email: "16gsanket@gmail.com",
          message: form.message,

        },"sR4k7sOHJKgA-ZDFU"
      )
      console.log("Email sent successfully");
      alert("Message sent successfully");
      setForm({name:"", message:"", email:""})
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    setIsLoading(true);
  };

  //   service_0qldz3r
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container pt-20">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Build Website? Contact Me
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
