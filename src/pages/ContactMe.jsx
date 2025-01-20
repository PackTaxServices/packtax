import '../styles/contactme.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    inquiry: '',
    message: '',
  });

  const [messageStatus, setMessageStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_eg11ixd';
    const templateId = 'template_m82m93j';
    const userId = 'x_sStyyAXQutjdMTu';

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(
        (response) => {
          console.log('Email sent successfully:', response);

          // Clear the form
          setFormData({ firstName: '', lastName: '', email: '', inquiry: '', message: '' });

          // Show success message
          setMessageStatus('Message sent successfully!');
          setTimeout(() => setMessageStatus(''), 3000); // Clear after 3 seconds
        },
        (error) => {
          console.error('Failed to send email:', error);

          // Show error message
          setMessageStatus('Failed to send message. Please try again later.');
          setTimeout(() => setMessageStatus(''), 3000); // Clear after 3 seconds
        }
      );
  };

  return (
    <div className="container-contact container my-5">
      <h2 className="text-contact text-center mb-4">Connect</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Your first name"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Your last name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
          />
        </div>

        {/* Inquiry Dropdown */}
        <div className="mb-3">
          <label htmlFor="inquiry" className="form-label">
            What are you contacting us for?
          </label>
          <select
            className="form-select"
            id="inquiry"
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Tax Preparation">Tax Preparation</option>
            <option value="Tax Filing">Tax Filing</option>
            <option value="Financial Consulting">Business Consulting</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-custom">
            Submit
          </button>
        </div>
      </form>

      {/* Message Status */}
      {messageStatus && (
        <div className={`text-center mt-3 ${messageStatus.includes('successfully') ? 'text-success' : 'text-danger'}`}>
          {messageStatus}
        </div>
      )}

      <div className='spacing-cm-bottom'>
      </div>
    </div>
  );
}

export default ContactMe;
