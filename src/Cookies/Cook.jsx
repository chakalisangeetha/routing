import React, { useRef,useState,useImperativeHandle,forwardRef,useEffect} from 'react';
import './Cook.css';

// Utility functions for cookies
const setCookie = (name, value, days) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const getCookie = (name) => {
  const cookieMatch = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieMatch ? cookieMatch.pop() : null;
};

const CookieConsent = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  
  useEffect(() => {
    const accepted = getCookie('cookiesAccepted');
    const declined = getCookie('cookiesDeclined');
    if (!accepted && !declined) {
      setVisible(true);
    }
  }, []);

  const handleClose = (action) => {
    if (action === 'accept') {
      setCookie('cookiesAccepted', 'true', 180); // 180 days = ~6 months
    } else {
      setCookie('cookiesDeclined', 'true', 180);
    }

    setIsFadingOut(true);
    setTimeout(() => setVisible(false), 500);
  };

  useImperativeHandle(ref, () => ({
    reopen: () => {
      setIsFadingOut(false);
      setVisible(true);
    }
  }));

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
});

const Cook = () => {
  const cookieRef = useRef();

  return (
    <div>
      <h1>Cook!!!</h1>
      <button
        onClick={() => cookieRef.current?.reopen()}
        style={{ position: 'fixed', bottom: 10, right: 10, zIndex: 2000 }}
      >
        Manage Cookies
      </button>

      <CookieConsent ref={cookieRef}/>
    </div>
  );
};
export default Cook;
