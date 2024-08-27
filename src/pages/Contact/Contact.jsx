import React, { useState } from "react";
import "./Contact.css";

// backend logic of contact component
function Contact() {
  // form for user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // error handling
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      // do i want logic for sending the form data to your backend API or email service??
      console.log("Form submitted:", formData);
    }
  };

  //front end appearance
  return (
    <section>
      <h1>Contact Me</h1>
      <form className="formContainer" onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="Enter name here"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="email"
              placeholder="Enter valid email here"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </li>
          <li>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              className="message"
              placeholder="Enter your message here"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>Thank you for your message!</p>}
    </section>
  );
}

export default Contact;
