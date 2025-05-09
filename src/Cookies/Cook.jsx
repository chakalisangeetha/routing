import React, { useEffect, useState } from 'react';
import './Cook.css'; // Optional: for styling

const Cook = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-popup">
      <p>
        We use cookies to improve your experience. By using our site, you accept our cookie policy.
      </p>
      <button onClick={acceptCookies}>Accept</button>
    </div>
  );
};

export default Cook;
