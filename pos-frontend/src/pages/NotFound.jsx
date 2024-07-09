import React from 'react';
import '../assets/notFound.css';

const NotFound = () => {
  return (
    <div className="page-not-found">
      <img
        src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*GQnRWgvBWLomxCVY-5h4gA.png"
        alt="404 Not Found"
        className="page-not-found-image"
      />
      <h1 className="page-not-found-title">Page Not Found</h1>
      <p className="page-not-found-message">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;