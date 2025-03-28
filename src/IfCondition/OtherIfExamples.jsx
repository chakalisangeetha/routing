// import React from 'react';
// function OtherIfExamples (props) {
//     if (props.isLoggedIn) {
//       return <h1>Welcome back!</h1>;
//     } else {
//       return <h1>Please log in.</h1>;
//     }
//   }
//   export default OtherIfExamples;



// import React from 'react';
//   function OtherIfExamples({ status }) {
//     if (status === 'loading') {
//       return <div>Loading...</div>;
//     } else if (status === 'error') {
//       return <div>Error! Something went wrong.</div>;
//     } else if (status === 'success') {
//       return <div>Success!</div>;
//     } else {
//       return <div>Status unknown.</div>;
//     }
//   }
// export default OtherIfExamples



import React from 'react';
const OtherIfExamples = ({ userRole }) => {
  let message;

  if (userRole === 'admin') {
    message = <h1>Welcome, Admin!</h1>;
  } else if (userRole === 'editor') {
    message = <h1>Welcome, Editor!</h1>;
  } else {
    message = <h1>Welcome, User!</h1>;
  }
  return <div>{message}</div>;
};
export default OtherIfExamples;



