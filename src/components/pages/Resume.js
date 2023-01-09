import React from 'react';
import resume from '../../assets/New Resume Hamza Ramzanali.docx.pdf'
import '../css/Resume.css'


export default function Resume() {
  return (
    <div>
      <div className="card-resume-pg">
        <div className="card-body">
          <h4 className="card-title">Skills:</h4>
          <p className="card-text">Over my time in the Northwestern Bootcamp, I was able to learn a lot of new skills. Some skills I am proficient in include:
            Javascript, HTML, CSS, MongoDB, MySQL, Sequelize, GitHub, Heroku, Express, BootStrap, Node.JS, React.JS, among a few others. I am also currently learning how to use AWS, Python, Java and SQL.</p>
        </div>
      </div>
      <div className="card-resume-pg2">
        <div className="card-body">
          <h4 className="card-title">Downloadable Resume:</h4>
        <a target="_blank" rel="noopener noreferrer" href={resume}>
          <button className="resume">
            <b>My Resume</b>
          </button>
        </a>
        </div>
      </div>
    </div>
  );
}
