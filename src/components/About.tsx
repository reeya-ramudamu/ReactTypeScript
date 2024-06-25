import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      <div>
        <h1>About this Project</h1>
        <p>
          This is the project of learning the basics of React with TypeScript and
          asynchronous programming,demonstrating the  fetching data from the JSONPlaceholder
          Fake API. you can view the api fetching  by in the  project tab.
        </p>
        
        <p>Author:Reeya Ramudamu</p>
        
          <Link to="/projects">Project page</Link>
      </div>
    </>
  );
};
export default About;
