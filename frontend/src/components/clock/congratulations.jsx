import React, { useState } from 'react';

const Congrats = () => {
  const [name, setName] = useState('');
  const [productName, setProductName] = useState('');
  const [message, setMessage] = useState(false);

  const handleConfirm = () => {
    if (name.trim() && productName.trim()) {
      setMessage(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-slate-100 font-sans">

      {!message ? (
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">eShop Confirmation</h2>
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-600 ml-1">Customer Name</label>
              <input
                type="text"
                placeholder="Plz enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-600 ml-1">Product Name</label>
              <input
                type="text"
                placeholder="Enter the name of product"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>
            <button
              onClick={handleConfirm}
              className="w-full py-3 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transform active:scale-95 transition-all"
            >
              Generate Certificate
            </button>
          </div>
        </div>
      ) : (
     
        <div className="relative w-full max-w-2xl p-1 bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-200 rounded-sm shadow-2xl animate-in zoom-in duration-700">
          <div className="bg-white p-10 border-8 border-double border-yellow-600 flex flex-col items-center text-center relative overflow-hidden">
            
      
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
               <h1 className="text-9xl font-black rotate-12">ESHOP</h1>
            </div>

            <h1 className="text-4xl font-serif font-bold text-yellow-800 uppercase tracking-widest mb-2">Certificate of Purchase</h1>
            <div className="w-32 h-1 bg-yellow-600 mb-8"></div>

            <p className="text-lg text-slate-600 italic mb-2">This official document certifies that</p>
            <h2 className="text-3xl font-bold text-slate-900 border-b-2 border-slate-300 px-6 pb-1 mb-6">
              {name}
            </h2>

            <p className="text-lg text-slate-600 mb-2">is the proud owner of a brand new</p>
            <h3 className="text-2xl font-semibold text-blue-700 mb-8">{productName}</h3>

            <p className="max-w-md text-slate-500 text-sm leading-relaxed mb-10">
              Thank you for choosing our <span className='text-red-800 font-bold'>ESHOP</span>. We guarantee that your marital-life... wait, we mean your product-life, will be happy and wonderful! We appreciate your trust in our service.
            </p>

            <div className="flex justify-between w-full mt-4 items-end">
              <div className="flex flex-col items-center">
                <div className="w-40 border-t border-slate-400 pt-1 text-slate-500 text-xs">eShop Authorized Signatory</div>
              </div>

              <div className="w-24 h-24 bg-yellow-500 rounded-full border-4 border-yellow-600 flex items-center justify-center shadow-lg relative">
                <div className="text-[10px] font-bold text-yellow-900 text-center leading-tight uppercase">
                  Official<br/>E-Shop<br/>Seal
                </div>
            
                <div className="absolute -bottom-4 -left-2 w-8 h-12 bg-red-600 -rotate-12 rounded-b-sm -z-10"></div>
                <div className="absolute -bottom-4 -right-2 w-8 h-12 bg-red-600 rotate-12 rounded-b-sm -z-10"></div>
              </div>

              <div className="text-slate-400 text-xs italic">
                Issued: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
          <button 
            onClick={() => setMessage(false)}
            className="mt-6 text-slate-500 hover:text-blue-600 underline text-sm w-full"
          >
            Create Another
          </button>
        </div>
      )}
    </div>
  );
};

export default Congrats;