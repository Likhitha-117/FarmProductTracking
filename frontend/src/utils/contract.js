// src/utils/contract.js

import { ethers } from "ethers";
import contractArtifact from "../abi/FarmProductTracking.json";

let CONTRACT_ABI;
let CONTRACT_ADDRESS;

try {
  if (Array.isArray(contractArtifact)) {
    // ABI is a pure array
    CONTRACT_ABI = contractArtifact;
    CONTRACT_ADDRESS = "0x699152D2051d2035559b378214A0b71E1aE79F38";
  } else {
    CONTRACT_ABI = contractArtifact.abi;
    CONTRACT_ADDRESS = contractArtifact.networks["5777"].address;
  }
} catch (err) {
  console.error("ABI format error: ", err);
}

export const getContract = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      throw new Error("MetaMask not found.");
    }

    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    return contract;
  } catch (err) {
    console.error("Contract connection failed:", err);
    throw err;
  }
};
