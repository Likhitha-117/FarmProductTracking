// src/components/WalletStatus.js
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function WalletStatus() {
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    checkWallet();
  }, []);

  const checkWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
      }
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error("Connection error:", error);
      }
    } else {
      alert("MetaMask is not installed.");
    }
  };

  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white border-b">
      <div className="flex items-center gap-2">
        <img src="/assets/logo.png" alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-semibold text-green-700">Farm Tracker</h1>
      </div>
      <div className="text-right">
        {isConnected ? (
          <p className="text-green-600 font-medium text-sm">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
        ) : (
          <button
            onClick={connectWallet}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default WalletStatus;
