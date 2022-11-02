import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label for="user_email">Email address</label>
          <input type="email" className="form-control" id="user_email" placeholder="name@example.com" />
        </div>
        <div className="form-group">
          <label for="user_name">Name</label>
          <input type="text" className="form-control" id="user_name" placeholder="First and Last Name" />
        </div>
        <div className="form-group">
          <label for="user-message">Message</label>
          <textarea className="form-control" id="user-message" rows="6"></textarea>
        </div>
        <button type='submit' className="contactFormBtn" onSubmit={sendEmail} Submit/>
      </form>
    </div>
  );
}
