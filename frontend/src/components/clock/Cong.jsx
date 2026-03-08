import React, { useState } from 'react';
import Congrats from './congratulations';

const Cong = () => {
  const [showCongrats, setShowCongrats] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center py-10 gap-6">
      {!showCongrats ? (
        <button 
          onClick={() => setShowCongrats(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform active:scale-95 duration-200 ease-in-out uppercase tracking-wider border-b-4 border-blue-800 hover:border-blue-900"
        >
          Certificate of buying
        </button>
      ) : (
        <div className="w-full animate-in fade-in duration-500">
          <Congrats />
          <button 
            onClick={() => setShowCongrats(false)}
            className="mt-4 text-sm text-slate-500 hover:text-blue-600 underline block mx-auto"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Cong;