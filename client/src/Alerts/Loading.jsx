// import React from 'react';

// const LoadingPage = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
//     </div>
//   );
// };

// export default LoadingPage;


import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex items-center justify-center w-24 h-24 border-4 border-dashed rounded-full animate-spin border-gray-300">
        <div className="w-10 h-10 bg-gray-300 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoadingPage;



