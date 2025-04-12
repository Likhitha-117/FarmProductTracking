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


//2nd change commented
// export default App;
// import './App.css';
// import React, { useState, useEffect } from 'react';
// // import { ethers } from 'ethers';

// import logo from './assets/logo.png'; // Ensure the logo path is correct

// import RegisterFarmer from './components/RegisterFarmer';
// import CreateBatch from './components/CreateBatch';
// import AddProcessingDetails from './components/AddProcessingDetails';
// import AddTransportationDetails from './components/AddTransportationDetails';
// import TransferCustody from './components/TransferCustody';
// import MarkAsReceived from './components/MarkAsReceived';
// import BatchDetails from './components/BatchDetails';

// function App() {
//   const [activeComponent, setActiveComponent] = useState('home');
//   const [account, setAccount] = useState(null);
//   const [isConnected, setIsConnected] = useState(false);

//   useEffect(() => {
//     const checkWallet = async () => {
//       if (window.ethereum) {
//         try {
//           const accounts = await window.ethereum.request({ method: 'eth_accounts' });
//           if (accounts.length > 0) {
//             setAccount(accounts[0]);
//             setIsConnected(true);
//           }
//         } catch (error) {
//           console.error("Wallet connection error:", error);
//         }
  
//         // Listen for account change
//         window.ethereum.on("accountsChanged", () => {
//           window.location.reload();
//         });
  
//         // Listen for network change
//         window.ethereum.on("chainChanged", () => {
//           window.location.reload();
//         });
//       }
//     };
  
//     checkWallet();
  
//     // Cleanup listeners on component unmount
//     return () => {
//       if (window.ethereum?.removeListener) {
//         window.ethereum.removeListener("accountsChanged", () => {});
//         window.ethereum.removeListener("chainChanged", () => {});
//       }
//     };
//   }, []);
  

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         setAccount(accounts[0]);
//         setIsConnected(true);
//       } catch (error) {
//         console.error("User rejected connection", error);
//       }
//     } else {
//       alert("MetaMask not found! Please install it.");
//     }
//   };

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case 'home':
//         return (
//           <div className="text-center mt-10">
//             <h1 className="text-4xl font-bold text-green-700 mb-6">Welcome to Farm Product Tracking System</h1>
//             <p className="text-gray-600 mb-10">A blockchain-based transparent solution to track agricultural products.</p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
//               <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
//                 <h2 className="text-xl font-semibold text-green-600 mb-2">Register Farmers</h2>
//                 <p className="text-gray-500">Onboard verified farmers and store their information securely.</p>
//               </div>
//               <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
//                 <h2 className="text-xl font-semibold text-green-600 mb-2">Track Batch</h2>
//                 <p className="text-gray-500">Create, process, and transport product batches through each stage.</p>
//               </div>
//               <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
//                 <h2 className="text-xl font-semibold text-green-600 mb-2">Verify Authenticity</h2>
//                 <p className="text-gray-500">Use QR codes and blockchain logs to validate product origins.</p>
//               </div>
//             </div>
//           </div>
//         );
//       case 'register':
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
//       {/* Top Bar */}
//       <nav className="bg-white shadow px-6 py-4 flex justify-between items-center flex-wrap">
//         <div className="flex items-center space-x-4">
//           <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          
//           <span className="font-bold text-xl text-green-700">FarmTrack</span>
//         </div>

//         <div className="flex items-center space-x-4">
//           {isConnected ? (
//             <div className="text-sm text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full">
//               Connected: {account.slice(0, 6)}...{account.slice(-4)}
//             </div>
//           ) : (
//             <button onClick={connectWallet} className="px-4 py-2 text-sm rounded-md bg-green-500 text-white hover:bg-green-600">
//               Connect Wallet
//             </button>
//           )}
//         </div>
//       </nav>

//       {/* Navigation Buttons */}
//       <div className="bg-white shadow px-6 py-3 flex space-x-4 overflow-x-auto">
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
//       </div>

//       {/* Component Render Area */}
//       <main className="p-6">{renderComponent()}</main>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png';
import RegisterFarmer from './components/RegisterFarmer';
import CreateBatch from './components/CreateBatch';
import AddProcessingDetails from './components/AddProcessingDetails';
import AddTransportationDetails from './components/AddTransportationDetails';
import TransferCustody from './components/TransferCustody';
import MarkAsReceived from './components/MarkAsReceived';
import BatchDetails from './components/BatchDetails';
import ImpactStats from './components/ImpactStats';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // 'farmer', 'consumer', or null

  useEffect(() => {
    const checkWallet = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
        }

        window.ethereum.on("accountsChanged", () => window.location.reload());
        window.ethereum.on("chainChanged", () => window.location.reload());
      }
    };
    checkWallet();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      setIsConnected(true);
    } else {
      alert("Install MetaMask first.");
    }
  };

  const handleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'register': return <RegisterFarmer />;
      case 'createBatch': return <CreateBatch />;
      case 'processing': return <AddProcessingDetails />;
      case 'transport': return <AddTransportationDetails />;
      case 'transfer': return <TransferCustody />;
      case 'received': return <MarkAsReceived />;
      case 'details': return <BatchDetails />;
      case 'about':
        return (
          <div className="max-w-3xl mx-auto mt-0 bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-4">About Us</h2>
            <p className="text-gray-700">
              We aim to provide transparency and accountability in agricultural product tracking using blockchain. Every batch from the farm is recorded immutably, giving consumers confidence in what they consume.
            </p>
          </div>
        );
        default:
          return (
            <div
            className="text-center mb-0 px-0 bg-cover bg-center min-h-screen">
              <h1 className="text-4xl font-bold text-green-700 mb-6">
                Welcome to Farm Product Tracking System
              </h1>
              <div className="flex justify-start p-10">
                   <img
                            src="image.png"
                             alt="Description"
                             className="w-96   h-auto  object-cover rounded-"
                                                                       />
                                                                          </div>
             
                                                                          <h3 className='text-3xl font-semibold text-green-800 mb-2'>What It Provides</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                  <h2 className="text-xl font-semibold text-green-600 mb-2">Register Farmers</h2>
                  <p className="text-gray-500">
                    Onboard verified farmers and store their information securely.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                  <h2 className="text-xl font-semibold text-green-600 mb-2">Track Batch</h2>
                  <p className="text-gray-500">
                    Create, process, and transport product batches through each stage.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                  <h2 className="text-xl font-semibold text-green-600 mb-2">Verify Authenticity</h2>
                  <p className="text-gray-500">
                    Use QR codes and blockchain logs to validate product origins.
                  </p>
                </div>
              </div>
              <div className="flex justify-center mb-10">
        <div className="bg-white rounded-xl p-6 shadow-lg max-w-xl w-full">
          <ImpactStats />
        </div>
      </div>
              
            </div>
          );
        
    }
  };

  return (
    <div className="min-h-screen bg-white-100">
      {/* Navbar */}
<nav className="bg-white shadow px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
  {/* Branding & Wallet */}
  <div className="flex items-center justify-between w-full md:w-auto">
    <div className="flex items-center space-x-3">
      <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
      <span className="text-xl font-bold text-green-700">FarmTrack</span>
    </div>
    <div className="md:hidden">
      {/* Mobile menu toggle if needed */}
    </div>
  </div>
  {/* Navigation */}
<div className="  border-green-200 flex flex-wrap items-center gap-x-6 gap-y-3 px-6 py-4 text-sm font-medium relative z-10"x>
  {/* Home */}
  <button
    onClick={() => {
      setActiveComponent('home');
      setDropdownOpen(null);
    }}
    className="px-6 py-3 text-base rounded-md bg-white hover:bg-green-200 transition text-green-700 shadow"
  >
    Home
  </button>

  {/* About Us */}
  <button
    onClick={() => {
      setActiveComponent('about');
      setDropdownOpen(null);
    }}
    className="px-6 py-3 text-base rounded-md bg-white hover:bg-green-200 transition text-green-700 shadow"
  >
    About Us
  </button>

  {/* Farmer Dashboard Dropdown */}
  <div className="relative group">
  <button
    onClick={() => handleDropdown('farmer')}
    className="px-6 py-3 text-base rounded-md bg-white hover:bg-green-200 transition text-green-700 shadow"
  >
    Farmer Dashboard
  </button>
  {dropdownOpen === 'farmer' && (
    <div className="absolute left-0 mt-2 bg-green-50 shadow-xl rounded-xl border border-green-300 w-80 z-20 p-2 transition-all duration-300">
      {[
        { key: 'register', label: 'Register Farmer' },
        { key: 'createBatch', label: 'Create Batch' },
        { key: 'processing', label: 'Add Processing' },
        { key: 'transport', label: 'Add Transportation' },
        { key: 'transfer', label: 'Transfer Custody' },
      ].map((item) => (
        <button
          key={item.key}
          onClick={() => {
            setActiveComponent(item.key);
            setDropdownOpen(null);
          }}
          className="block w-full text-left px-4 py-2 rounded-md text-green-700 hover:bg-green-200 hover:text-green-900 transition duration-200"
        >
          {item.label}
        </button>
      ))}
    </div>
  )}
  </div>

  {/* Consumer Dashboard Dropdown */}
  <div className="relative group">
    <button
      onClick={() => handleDropdown('consumer')}
      className="px-6 py-3 text-base rounded-md bg-white hover:bg-green-200 transition text-green-700 shadow"
    >
      Consumer Dashboard
    </button>
    {dropdownOpen === 'consumer' && (
      <div className="absolute left-0 mt-2 bg-green-50 shadow-xl rounded-xl border border-green-300 w-80 z-20 p-2 transition-all duration-300">
        {[
          { key: 'received', label: 'Mark As Received' },
          { key: 'details', label: 'Batch Details' },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => {
              setActiveComponent(item.key);
              setDropdownOpen(null);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-green-100"
          >
            {item.label}
          </button>
        ))}
      </div>
    )}
  </div>
</div>

  {/* Wallet Connect */}
  <div className="text-sm md:ml-auto">
    {isConnected ? (
      <span className="bg-green-100 px-3 py-1 rounded-full text-green-700 font-medium">
        Connected: {account.slice(0, 6)}...{account.slice(-4)}
      </span>
    ) : (
      <button
        onClick={connectWallet}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        Connect Wallet
      </button>
    )}
  </div>
</nav>



      {/* Page Content */}
      <main className="p-0">{renderComponent()}</main>
    </div>
  );
}

export default App;
