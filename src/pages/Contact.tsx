import React, { useState } from 'react';
import axios from 'axios';

import { db } from "../firebase/config";
import { get, push, ref, set } from "firebase/database";

class Feedback {
  name:string;
  email:string;
  message:string;

  constructor() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}

const Contact: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation can be added here

    const contactFormData = { name, email, message };
    
    try {
      const newDocRef = push(ref(db, "feedback"));
      await set(newDocRef, contactFormData);

      setSubmitted(true);
    } catch (error) {
      setSubmitted(false);
    } 
  };

  const viewAllFeedbacks = async () => {
    const dbRef = ref(db, "feedback");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const users = snapshot.val();

      const tempFeedback = Object.keys(users)
        .map((id) => {
          return {
            ...users[id],
            id,
          };
        });

        setFeedbacks(tempFeedback);
    } else {
      setFeedbacks([]);
    }
  }

  viewAllFeedbacks();

  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>Have a question or feedback? We'd love to hear from you!</p>
      </header>

      <div className="contact-div">
        <form className="add-feedback" onSubmit={handleSubmit}>
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
        <div className="view-feedbacks">
          <h1>Feedback List</h1>

          <ul>
            {feedbacks.length > 0 && feedbacks.map(feedback => <li>{feedback.message}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
