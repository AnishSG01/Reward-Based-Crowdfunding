import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

// ABIs
import Funding from "../abis/Funding.json";

// Config
import config from "../config.json";

const Donatepg = () => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [iamnt, setIamnt] = useState(0.01);
  const [funding, setFunding] = useState(null);
  const [balance, setBalance] = useState(null);

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };
  const getContractBalance = async () => {
    let balance = await provider.getBalance(funding.address);
    setBalance(ethers.utils.formatEther(balance));
  };

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    const network = await provider.getNetwork();
    const funding = new ethers.Contract(
      config[network.chainId].Funding.address,
      Funding,
      provider
    );
    setFunding(funding);

    window.ethereum.on("accountsChanged", async () => {
      window.location.reload();
    });
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const donate = async () => {
    const signer = await provider.getSigner();
    const amount = ethers.utils.parseEther(iamnt);
    const transaction = await funding.connect(signer).mint({ value: amount });
    await transaction.wait();
  };

  async function executeWithdraw() {
    const signer = await provider.getSigner();
    try {
      await funding.connect(signer).withdraw();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "15px", marginTop: "100px" }}>
        Welcome to Crowdfunding
      </h1>
      {account ? (
        <button type="button" className="nav__connect">
          {account.slice(0, 6) + "..." + account.slice(38, 42)}
        </button>
      ) : (
        <button type="button" className="nav__connect" onClick={connectHandler}>
          Connect
        </button>
      )}

      <input
        type="text"
        value={iamnt}
        onChange={(e) => {
          setIamnt(e.target.value);
        }}
      />

      <h1>{iamnt}</h1>

      <button type="button" className="nav__connect" onClick={donate}>
        Donate{" "}
      </button>

      {balance ? (
        <button type="button" className="nav__connect">
          {balance}
        </button>
      ) : (
        <button
          type="button"
          className="nav__connect"
          onClick={getContractBalance}
        >
          Balance
        </button>
      )}

      <button type="button" className="nav__connect" onClick={executeWithdraw}>
        Withdraw{" "}
      </button>

      <main></main>
    </div>
  );
};

export default Donatepg;
