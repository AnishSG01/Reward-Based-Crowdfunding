require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
    url: "https://polygon-mumbai.g.alchemy.com/v2/lFqFGQRWfXKm26_KQ_h_KpGpPlUzKw07",
    accounts: [
      `0x${"24ed9b678317256d38105fd0b0d80a55ae9182f3057ac9968fa619ac63eadca9"}`,
    ],
    },
    },
};
