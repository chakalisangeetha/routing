import React, { useState } from 'react';
import './Cook.css';
const Cook
  = () => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
    const cookiesDeclined = localStorage.getItem('cookiesDeclined') === 'true';
    const [visible, setVisible] = useState(!cookiesAccepted && !cookiesDeclined);
    const [isFadingOut, setIsFadingOut] = useState(false)
    const handleClose = (action) => {
      if (action === 'accept') {
        localStorage.setItem('cookiesAccepted', 'true');
      } else {
        localStorage.setItem('cookiesDeclined', 'true');

      }
      setIsFadingOut(true);
      // Wait for the fade-out animation to finish (500ms), then hide
      setTimeout(() => setVisible(false), 500);
    };
    if (!visible) return null;
    return (
      <div className={`cookie-popup ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
        <p>
          We use cookies to improve your experience. You can accept or decline our use of cookies.
        </p>
        <div className="cookie-buttons">
          <button onClick={() => handleClose('accept')} className="accept">Accept</button>
          <button onClick={() => handleClose('decline')} className="decline">Decline</button>
        </div>
      </div>
    );
  };

export default Cook;
