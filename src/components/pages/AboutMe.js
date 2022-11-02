import { auto } from '@popperjs/core';
import React from 'react';
import '../css/AboutMe.css'

const styles = {
  homePgHeader: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 60,
  },
  h2: {
    color: 'black',
  },
  p: {
    marginTop: 40,
    marginLeft: auto,
    marginRight: auto,
    textAlign: 'center',
    border: 'solid'
  },
  card: {
    width: auto,
  }
}

export default function AboutMe() {
  return (
    <div>
      <div classNameName='homePg-header' style={styles.homePgHeader}>
        <h2 style={styles.h2}>About Me</h2>
      </div>
      <div className="container">
      <div className="card col" styles={styles.card}>
        <div className="card-body">
          <h5 className="card-title">Education</h5>
          <p className="card-text">I am currently a student at the Northwestern Full-Stack Web Development Bootcamp. Previously, I graduated from UIC with a degree in Integrated Health Studies with a concentration in Health Sciences. I graduated in December 2021.</p>
        </div>
      </div>
      <div className="card col">
        <div className="card-body">
          <h5 className="card-title">Career Path</h5>
          <p className="card-text"> I was working towards becoming a doctor, as that had always been a life-long dream of mine. I realized though that the medicine lifestyle was not for me, so I decided to make a career switch into coding. I feel this is the best profession for me and am really excited to get my career started.</p>
        </div>
      </div>
      <div className="card col">
        <div className="card-body">
          <h5 className="card-title">Right Now</h5>
          <p className="card-text"> I have completed many projects now that I started my coding career. They can be seen in the Portfolio section of this page. If you have any more questions about me, feel free to contact me through the Contact page. My email and Github are also linked below.
            Thank you- Hamza!</p>
        </div>
      </div>
      </div>
    </div>
  );
}
