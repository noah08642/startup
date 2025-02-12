import React from 'react';
import './resume.css';

export function Resume() {
  return (
    <main>
      <div className="resume-and-link">
        <div className="resume-container">
          <iframe src="resume.pdf" width="100%" height="600px"></iframe>
        </div>
        <div className="resume-download">
          <a href="resume.pdf" download> Download resume</a>
        </div>        
      </div>
    </main>
  );
}