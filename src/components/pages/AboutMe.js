import React from 'react';

const styles = {
  homePgHeader: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 60,
  },
  h2: {
    background: 'red',
    color: 'black',
  },
  p: {
    marginTop: 40,
    background: 'black',
    textAlign: 'center',
    color: 'white',
  }
}

export default function AboutMe() {
  return (
    <div className='homePg-header' style={styles.homePgHeader}>
      <h2 style={styles.h2}>About Me</h2>
      <p style={styles.p}>
        My name is Hamza Ramzanali. I am currently a student at the Northwestern Full-Stack Web Development Bootcamp. Previously, I graduated from UIC with a degree in Integrated Health Studies with a concentration in Health Sciences. I graduated in December 2021. I was working towards becoming a doctor, as that had always been a life-long dream of mine. I realized though that the medicine lifestyle was not for me, so I decided to make a career switch into coding. I feel this is the best profession for me and am really excited to get my career started. I have completed many projects now that I started my coding career. They can be seen in the Portfolio section of this page. If you have any more questions about me, feel free to contact me through the Contact page. My email and Github are also linked below. 
        Thank you- Hamza!
      </p>
    </div>
  );
}
