import React from 'react';
import resume from '../../assets/New Resume Hamza Ramzanali.docx.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div>
        <h4>Skills:</h4>
      </div>
      <div>
        <h4> Downloadable Resume:</h4>
        <a target="_blank" rel="noopener noreferrer" href={resume}>
          <button className="resume">
            <b>My Resume</b>
          </button>
        </a>
      </div>
    </div>
  );
}
