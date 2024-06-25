import React from 'react';

const Contactus: React.FC = () => {
  return (
    <>
      <div>
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out to us through any of the following channels:
        </p>
        <ul>
          <li>Mobile no: 9821823397</li>
          <li>
            Facebook:{" "}
            <a href="https://www.facebook.com/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            >
              facebook
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://www.github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              yourprofile
            </a>
          </li>
          <li>
          Instagram:
           <a href="https://www.instagram.com/yourprofile"
            target="_blank" rel="noopener noreferrer"
            >
            yourprofile
        </a>
        </li>
        <li>
          LinkedIn:
           <a href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
             rel="noopener noreferrer"
             >
                yourprofile
            </a>
        </li>

        </ul>
      </div>
    </>
  );
};
export default Contactus;
