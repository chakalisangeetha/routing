import React, { useState } from 'react';
const Examples=() =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back, user!</h1>
      ) : (
        <h1>Please log in.</h1>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default Examples;


// import React, { useState } from 'react';
// const SomeLogicalEx = () => {
//   const [activeTab, setActiveTab] = useState('tab1');

//   return (
//     <div>
//       <div>
//         <button onClick={() => setActiveTab('tab1')}>Tab 1</button>
//         <button onClick={() => setActiveTab('tab2')}>Tab 2</button>
//         <button onClick={() => setActiveTab('tab3')}>Tab 3</button>
//       </div>
//       {activeTab === 'tab1' && <div>This is content for Tab 1</div>}
//       {activeTab === 'tab2' && <div>This is content for Tab 2</div>}
//       {activeTab === 'tab3' && <div>This is content for Tab 3</div>}
//     </div>
//   );
// };
// export default SomeLogicalEx;







