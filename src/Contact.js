import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Optional, for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        'service_ts4wq71',  // Replace with your service ID
        'template_m36rgyo',  // Replace with your template ID
        formData,
        'N35_agu-QfcIQMWJe'      // Replace with your user ID (from EmailJS)
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setSuccessMessage('Your message has been sent successfully!');
          setFormData({ name: '',  message: '' });
        },
        (error) => {
          console.error('Failed to send email:', error);
          setErrorMessage('There was an error sending your message. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div> */}
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Contact;