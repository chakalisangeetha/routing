import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Details = () => {
  let location = useLocation();
  console.log(location, '5==');
  const navigate = useNavigate();

  return (
    <>
      <p>{location.state.title1}</p>
      <p>{location.state.title2}</p>
      <p>{location.state.title3}</p>
      <p>{location.state.title4}</p>
      <p>{location.state.title5}</p>

      <button onClick={() => navigate('/')}> Go Back </button>
    </>
  );
};
export default Details;
