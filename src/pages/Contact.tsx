import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation can be added here

    const contactFormData = { name, email, message };

    axios.post('http://locahost:5000/api/contact', contactFormData)
      .then(response => {
        console.log('Message sent:', response.data);
        setSubmitted(true);
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });
  };

  if (submitted) {
    return <p>Thank you for contacting us! We will get back to you soon.</p>;
  }

  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>Have a question or feedback? We'd love to hear from you!</p>
      </header>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
