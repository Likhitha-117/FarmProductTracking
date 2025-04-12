// import './App.css';
// import React, { useState } from 'react';

// import RegisterFarmer from './components/RegisterFarmer';
// import CreateBatch from './components/CreateBatch';
// import AddProcessingDetails from './components/AddProcessingDetails';
// import AddTransportationDetails from './components/AddTransportationDetails';
// import TransferCustody from './components/TransferCustody';
// import MarkAsReceived from './components/MarkAsReceived';
// import BatchDetails from './components/BatchDetails';

// function App() {
//   const [activeComponent, setActiveComponent] = useState('home');

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case 'home':
//   return (
//     <div className="text-center mt-10">
//       <h1 className="text-4xl font-bold text-green-700 mb-6">Welcome to Farm Product Tracking System</h1>
//       <p className="text-gray-600 mb-10">A blockchain-based transparent solution to track agricultural products.</p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
//         <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
//           <h2 className="text-xl font-semibold text-green-600 mb-2">Register Farmers</h2>
//           <p className="text-gray-500">Onboard verified farmers and store their information securely.</p>
//         </div>
//         <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
//           <h2 className="text-xl font-semibold text-green-600 mb-2">Track Batch</h2>
//           <p className="text-gray-500">Create, process, and transport product batches through each stage.</p>
//         </div>
//         <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
//           <h2 className="text-xl font-semibold text-green-600 mb-2">Verify Authenticity</h2>
//           <p className="text-gray-500">Use QR codes and blockchain logs to validate product origins.</p>
//         </div>
//       </div>
//     </div>
//   );

//         case 'register':
//         return <RegisterFarmer />;
//       case 'createBatch':
//         return <CreateBatch />;
//       case 'processing':
//         return <AddProcessingDetails />;
//       case 'transport':
//         return <AddTransportationDetails />;
//       case 'transfer':
//         return <TransferCustody />;
//       case 'received':
//         return <MarkAsReceived />;
//       case 'details':
//         return <BatchDetails />;
//       default:
//         return <RegisterFarmer />;
//     }
//   };

//   const navItems = [
//     { key: 'home', label: 'Home' },
//     { key: 'register', label: 'Register Farmer' },
//     { key: 'createBatch', label: 'Create Batch' },
//     { key: 'processing', label: 'Add Processing' },
//     { key: 'transport', label: 'Add Transportation' },
//     { key: 'transfer', label: 'Transfer Custody' },
//     { key: 'received', label: 'Mark As Received' },
//     { key: 'details', label: 'View Batch Details' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation bar */}
//       <nav className="bg-white shadow px-6 py-4 flex space-x-4 overflow-x-auto">
//         {navItems.map((item) => (
//           <button
//             key={item.key}
//             onClick={() => setActiveComponent(item.key)}
//             className={`px-4 py-2 rounded-md font-medium hover:bg-green-100 transition ${
//               activeComponent === item.key ? 'bg-green-500 text-white' : 'text-gray-700'
//             }`}
//           >
//             {item.label}
//           </button>
//         ))}
//       </nav>

//       {/* Component Display */}
//       <main className="p-6">{renderComponent()}</main>
//     </div>
//   );
// }

// export default App;
import './App.css';
import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';

import logo from './assets/logo.png'; // Ensure the logo path is correct

import RegisterFarmer from './components/RegisterFarmer';
import CreateBatch from './components/CreateBatch';
import AddProcessingDetails from './components/AddProcessingDetails';
import AddTransportationDetails from './components/AddTransportationDetails';
import TransferCustody from './components/TransferCustody';
import MarkAsReceived from './components/MarkAsReceived';
import BatchDetails from './components/BatchDetails';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkWallet = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
          }
        } catch (error) {
          console.error("Wallet connection error:", error);
        }
  
        // Listen for account change
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
  
        // Listen for network change
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
      }
    };
  
    checkWallet();
  
    // Cleanup listeners on component unmount
    return () => {
      if (window.ethereum?.removeListener) {
        window.ethereum.removeListener("accountsChanged", () => {});
        window.ethereum.removeListener("chainChanged", () => {});
      }
    };
  }, []);
  

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error("User rejected connection", error);
      }
    } else {
      alert("MetaMask not found! Please install it.");
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return (
          <div className="text-center mt-10">
            <h1 className="text-4xl font-bold text-green-700 mb-6">Welcome to Farm Product Tracking System</h1>
            <p className="text-gray-600 mb-10">A blockchain-based transparent solution to track agricultural products.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                <h2 className="text-xl font-semibold text-green-600 mb-2">Register Farmers</h2>
                <p className="text-gray-500">Onboard verified farmers and store their information securely.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                <h2 className="text-xl font-semibold text-green-600 mb-2">Track Batch</h2>
                <p className="text-gray-500">Create, process, and transport product batches through each stage.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                <h2 className="text-xl font-semibold text-green-600 mb-2">Verify Authenticity</h2>
                <p className="text-gray-500">Use QR codes and blockchain logs to validate product origins.</p>
              </div>
            </div>
          </div>
        );
      case 'register':
        return <RegisterFarmer />;
      case 'createBatch':
        return <CreateBatch />;
      case 'processing':
        return <AddProcessingDetails />;
      case 'transport':
        return <AddTransportationDetails />;
      case 'transfer':
        return <TransferCustody />;
      case 'received':
        return <MarkAsReceived />;
      case 'details':
        return <BatchDetails />;
      default:
        return <RegisterFarmer />;
    }
  };

  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'register', label: 'Register Farmer' },
    { key: 'createBatch', label: 'Create Batch' },
    { key: 'processing', label: 'Add Processing' },
    { key: 'transport', label: 'Add Transportation' },
    { key: 'transfer', label: 'Transfer Custody' },
    { key: 'received', label: 'Mark As Received' },
    { key: 'details', label: 'View Batch Details' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center flex-wrap">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          
          <span className="font-bold text-xl text-green-700">FarmTrack</span>
        </div>

        <div className="flex items-center space-x-4">
          {isConnected ? (
            <div className="text-sm text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full">
              Connected: {account.slice(0, 6)}...{account.slice(-4)}
            </div>
          ) : (
            <button onClick={connectWallet} className="px-4 py-2 text-sm rounded-md bg-green-500 text-white hover:bg-green-600">
              Connect Wallet
            </button>
          )}
        </div>
      </nav>

      {/* Navigation Buttons */}
      <div className="bg-white shadow px-6 py-3 flex space-x-4 overflow-x-auto">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveComponent(item.key)}
            className={`px-4 py-2 rounded-md font-medium hover:bg-green-100 transition ${
              activeComponent === item.key ? 'bg-green-500 text-white' : 'text-gray-700'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Component Render Area */}
      <main className="p-6">{renderComponent()}</main>
    </div>
  );
}

export default App;
